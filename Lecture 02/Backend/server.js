import express from 'express'

const app = express()

// app.use(express.static('dist'))

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'dad joke 1',
            content: 'what is a factory that makes okay products? satisfactory'
        },
        {
            id: 2,
            title: 'dad joke 2',
            content: 'what does a cat do when it is home alone? catastrophe'
        },
        {
            id: 3,
            title: 'bangali baba joke 1',
            content: 'which desh has no water? sondesh'
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})