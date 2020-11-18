const express = require('express')
const app = express()
const path=require('path')


app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

app.get('/books/:booksID',function (req, res) {
const booksID = req.params.booksID  
res.send(data[booksID])
})




const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

app.get('/',function (request, response) {
    console.log("we've recieved a request");
response.send('hello')
})

app.get('/users/:name',function (request, response) {
    console.log("we've recieved a request");
response.send({name: request.params.name, message: users[request.params.name]})
})

app.get('/routeWithOptionalParameters', (request, response) => {
    let params = request.query
    response.send(params)
})
app.get('/details', (request, response) => {
    let params = request.query
    console.log(params.city);
    response.send(params)
})


const port = 3000
app.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})