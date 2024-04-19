const express = require('express')
const app = express()
const port = 3000
// const swaggerUi = require('swagger-ui-express')
// const swaggerDocument = require('./swagger.json')
const session = require('express-session')
// app.use('/swagger-ui/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
}))

function authentication (req, res, next) {
  if (req.session.isAuthenticated) {
    next()
  } else {
    res.status(403).json({ error: 'Unauthorized' })
  }
}

const tasks = [{ id: 1, titel: 'Einkaufsliste', beschreibung: 'Milch, Brot, Eier kaufen', done: false, dueDate: '2024-04-20' }]

app.use('/tasks', authentication)

app.get('/tasks', (req, res) => {
  return res.status(200).json(tasks)
})

app.post('/tasks', (req, res) => {
  const { titel, beschreibung, dueDate } = req.body
  if (titel) {
    const id = (tasks.length + 1).toString()
    const done = false
    const newTask = { id, titel, beschreibung, done, dueDate }
    tasks.push(newTask)
    res.status(201).json(newTask)
  } else {
    res.status(422).json({ error: 'titel erfordelich' })
  }
})

app.get('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const task = tasks.find(task => task.id === id)
  if (!task) {
    res.status(404).json({ error: 'Task nicht gefunden' })
  } else {
    res.status(200).json(task)
  }
})

app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = tasks.findIndex(task => task.id === id) + 1
  if (!index) {
    res.status(404).json({ error: 'Task nicht gefunden' })
  } else {
    const task = tasks[index]
    const newTask = { ...task, ...req.body }
    tasks[index] = newTask
    res.status(200).json(newTask)
  }
})

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const task = tasks.find(task => task.id === id)
  if (!task) {
    res.status(404).json({ error: 'Task nicht gefunden' })
  } else {
    tasks.splice(task, 1)
    res.status(205).json(task)
  }
})

const loginData = [{ email: '', password: 'm295' }]
let isAuthenticated = false

app.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = loginData.find(user => user.password === password)
  if (user) {
    user.email = email
    req.session.user = user
    isAuthenticated = true
    req.session.isAuthenticated = isAuthenticated
    res.status(201).json({ authorisation: true })
  } else {
    res.status(401).json({ authorisation: false })
  }
})

app.get('/verify', (req, res) => {
  if (req.session.isAuthenticated === isAuthenticated) {
    res.status(201).json({ email: req.session.user.email })
  } else {
    res.status(203).json({ authorisation: false })
  }
})

app.delete('/logout', (req, res) => {
  isAuthenticated = false
  res.sendStatus(204)
})

app.listen(port, () => {
  console.log(`Tasks API listening on port ${port}`)
})
