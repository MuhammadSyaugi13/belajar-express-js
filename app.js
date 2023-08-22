const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('hello world')
    res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', {root: __dirname})
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`)
    // res.sendFile('./contact.html', {root: __dirname})
})

// error handler
app.use('/', (req, res) => {
    res.status(404)
    res.send('<h2>404</h2>')
  })


app.listen(port, () => {
    console.log(`listening on port 3000.....`)
})



// const http = require('http')
// const fs = require('fs')
// const port = 3000

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404)
//             res.write('Error: file not found')
//         }else{
//             res.write(data)
//         }
//         res.end()
//     })
// }

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })

//     const url = req.url

//     switch (url) {
//         case '/about.html':
//             renderHTML('./about.html', res)
//             break;

//         case '/contact.html':
//             renderHTML('./contact.html', res)
//             break;
    
//         default:
//             renderHTML('./index.html', res)
//             break;
//     } 

// }).listen(port, () => {
//     console.log(`server is  listening on port ${port}....`)
// })