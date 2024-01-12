const express = require('express')
const app = express()

app.use(express.json())

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

let persons = [
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
      }
    ]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
  const numberOfPeople = persons.length
  const newDate = new Date()
  res.send('<p>Phonebook has info for ' + numberOfPeople + ' people</p><p>' + newDate + '</p>')
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).send('Not found')
  }
})
