const express = require('express')
const router = express.Router()

const wordCount = {}



router.get('/sanity', function (req, res) {

    res.send("server is up and running")

})

router.get('/word/:word', function (req, res) {
    const word = req.params.word

    if (wordCount[word] != undefined) {
        res.send({ count: wordCount[word] })
    } else {
        res.send({ count: 0 })
    }
})

router.post('/word', function (req, res) {
const newWord=req.body
if (wordCount[newWord.word]!=undefined) {
    wordCount[newWord.word]++
}else{
    wordCount[newWord.word]=1
}
res.end()
})

router.post('/words/:sentence', function(req, res) {
	    
    let words = req.params.sentence.split(" ")
    let numNewWords = 0
    let numOldWords = 0
    for(let word of words) {
        if(wordCount[word]) {
            wordCount[word]++
            numOldWords++
        } else {
            wordCount[word] = 1
            numNewWords++
        }
    }

    res.send({text: `Added ${numNewWords} words, ${numOldWords} already existed.`, currentCount: -1})
})



module.exports = router