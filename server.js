//A. get a hold of express
const express = require('express')
const randomNumberGenerator = require('./randomNumGenerator.js')

//B. invoke express
const app = express()

//C. PORT assignment
const PORT = 3000



//1. Be Polite, Greet the User

app.get('/greetings/:username', (req, res) => {
    
    //5.1.1 get the username from the url
    const username = req.params.username

    //get a random number between 0 and 1
    const randomInt = randomNumberGenerator(0, 1)


    //test
    //console.log(randomInt)
    //res.send(`Hello there, ${username}!`)
    if(randomInt) return res.send(`What a delight it is to see you once more, ${username}`)
    
    return res.send(`Hell there, ${username}`)
})

//2. Rolling the Dice
app.get('/roll/:maxroll', (req, res) => {

    
    //get the params which is currently string
    let maxroll = req.params.maxroll

    //needed parseInt here to convert to number 
    maxroll = parseInt(maxroll)
    
    //guard let first if maxroll is not a number
    if(isNaN(maxroll)) return res.send(`You must specify a number.`)
    
    //if maxroll is indeed a number then you can generate a number between 0 >= maxroll
    const randomWholeNumberBetween0AndTheGivenNumber = randomNumberGenerator(0, maxroll)


    return res.send(`You rolled a ${randomWholeNumberBetween0AndTheGivenNumber}.`)

})


///D. listen to PORT 3000

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})