// The address of this server connected to the network is:
// URL: http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express')
const app = express()
const PORT = 8383

let data = ['akshat']

app.use(express.json())

// HTTP Requests && Paths
// The method informs the nature of the request and the routes is the subdirectory and based on route and request we create an endpoint to handle those

// Website endpoints (for sending back HTML and they typically come when a user enters a url in a browser)
app.get('/', (req, res) => {
    res.send(`
        <body style="background:pink; color: blue;">
        <h1>DATA:</h1>
        <p>${JSON.stringify(data)}</p>
        <a href="/dashboard">Dashboard</a>
        </body>
        `)
})
app.get('/dashboard', (req, res) => {
    res.send(`
        <body>
            <h1>Dashboard</h1>
            <a href="/">Home</a>
        </body>
       `)
})

// API endpoints 

// CRUD -> create(POST) read(GET) update(PUT) delete(DELETE)

app.get('/api/data', (req, res) => {
    console.log('This one is for data')
    res.send(data)
})

app.post('/api/data', (req, res) => {
    // Create a user, ex: clicking a sign up button
    // the user clicks the sign up button after entering their credentials, and their browser is wired up to send out a network request to the server to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('deleted the last element of array')
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))