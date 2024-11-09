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
    console.log(randomInt)
    if(randomInt) return res.send(`What a delight it is to see you once more, ${username}`)
    
    return res.send(`Hell there, ${username}`)
})



///D. listen to PORT 3000

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})