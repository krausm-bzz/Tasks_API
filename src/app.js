const express = require('express')
const app = express()
const port = 3000
//const swaggerUi = require('swagger-ui-express')
//const swaggerDocument = require('./swagger.json')
const session = require('express-session')
//app.use('/swagger-ui/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let tasks = [{"id": 1, "titel": "Einkaufsliste", "beschreibung": "Milch, Brot, Eier kaufen", "done": false, "dueDate": "2024-04-20"}]

app.get('/tasks', (req,res) => {
    return res.status(200).json(tasks);
})

app.post('/tasks', (req, res) => {
    const { titel, beschreibung, dueDate } = req.body
    if (titel) {
        const id = (tasks.length + 1).toString()
        let completed = false
        const newTask = { id, titel, beschreibung , dueDate, completed}
        tasks.push(newTask)
        res.status(201).json(newTask)
    } else {
        res.status(422).json({error: "titel erfordelich"})
    }
});

app.listen(port, () => {
    console.log(`Tasks API listening on port ${port}`);
});






