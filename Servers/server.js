const express = require('express')
const app = express()


app.get('/:name',function (request, response) {

    console.log("we've recieved a request");
response.send({name: `Hello ${request.params.name}`})
})

const port = 3000
app.listen(port, function () {
    console.log(`Node server created at port ${port}`)
})