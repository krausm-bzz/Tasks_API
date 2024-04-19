const express = require('express')
const app = express()
const port = 3000
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const session = require('express-session')
app.use('/swagger-ui/', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let tasks = []

app.get('/tasks', (req,res) => {
    return res.status(200).json(tasks);
})

app.post('/tasks', (req, res) => {
    const {Titel, Beschreibung, DueDate} = req.body;


    if (!Titel || !Beschreibung || !DueDate) {
        return res.status(422).json({error: "Titel, Beschreibung und DueDate sind erforderlich."});
    }

    const task = {
        ID: tasks.length + 1, // auto increment
        Titel,
        Beschreibung,
        Done: false,
        DueDate,
        Erstellungsdatum: new Date().toISOString(),
        Erfuellungsdatum: null
    };
})

app.listen(port, () => {
    console.log(`Tasks API listening on port ${port}`);
});






