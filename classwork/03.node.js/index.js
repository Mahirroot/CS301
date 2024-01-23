const express = require('express') //ES5 ES6 (JavaScript)
require('dotenv').config()
const BodyParser = require('body-parser')
require('colors')

const app = express()

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))


let users = [
    {
        id: 1,
        useer: 'Ulfat',
        surname: 'Zakirli'
    },
    {
        id: 2,
        useer: 'Mahir',
        surname: 'Shamilli'
    },
    {
        id: 3,
        useer: 'Nihad',
        surname: 'nəbilim'
    },
    {
        id: 4,
        useer: 'Nazrin',
        surname: 'Olabilir'
    },
]


app.get('/students', (req, res) => {
    res.json(users)
})

app.get('/students/:id', (req, res) => {
    const { id } = req.params
    const user = users.find((item) => item.id == id)
    if (user) {
        return res.json(user)
    } else {
        return res.send('User not found with the given Id!')
    }
})

app.delete('/students/:id', (req, res) => {
    const params = req.params
    users = users.filter((item) => item.id != params.id)
    return res.send('User deleted successfully!')
})

app.post('/students', (req, res) => {
    const userBody = req.body
    if (userBody) {
        users.push(userBody)
        return res.send('The user added successfully!')
    } else {
        return res.send('Body cant be empty!')
    }
})

app.post('/students', (req, res) => {
    const userBody = req.body
    if (userBody) {
        users.push(userBody)
        return res.send('The user added successfully!')
    } else {
        return res.send('Body cant be empty!')
    }
})


app.patch('/students/:id', (req, res) => {
    const { id } = req.params
    const { useer, surname } = req.body
    let user = users.find((item) => item.id == id)
    if (user) {
        user.useer = useer
        user.surname = surname
        res.status(200)
        return res.json('User updated successfull!')
    } else {
        res.status(400)
        return res.send('User not found with the given Id!')
    }
})




const PORT = 7000
app.listen(PORT, () => console.log(`Server is running: http://localhost:${PORT}`.bold.blue))