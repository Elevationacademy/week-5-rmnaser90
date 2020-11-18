const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]


app.get('/priceCheck/:name', function (req,res) {
    
const name = req.params.name
const item = store.find(i => i.name == name) || {}

res.send({price: item.price})
})

app.get('/buy/:name',function (req,res) {
    const name = req.params.name
    const item = store.find(i => i.name == name) || {}
    item.inventory--
    res.send(item)
})

const port=3001
app.listen(port,function () {
console.log(`server is up and running at port: ${port}`);

})
