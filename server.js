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


//3. I Want THAT One!
app.get('/collectibles/:collectiblesIndex', (req, res) => {
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
    ];
    
    //get the params and convert it to int
    const collectiblesIndex = parseInt(req.params.collectiblesIndex)
    //this will result to either undefined or the object corresponding the collectiblesIndex
    const collectible = collectibles.find((collectible, index) => index === collectiblesIndex)
    
    //first fork is if the collectible is not an index in the array
    //which is undefined for some reason i tried adding ! to collectibles like so !collectibles and it turn the value to true

    if(!collectible) return res.send("This item is not yet in stock. Check back soon!")
    
    //if the index exist then simply return the string So, collectibles.name For collectibles.price, it can be yours!”
    res.send(`So, you want the ${collectible.name}? For ${collectible.price}, it can be yours!`)
})

//4. Filter Shoes by Query Parameters
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


app.get('/shoes', (req, res) => {

    console.log(req.query)
    //get the min-price query params
    const min_price = parseInt(req.query['min-price'])
    //get the max-price query params
    const max_price = parseInt(req.query['max-price'])
    const shoe_type = req.query['type']

    // //forks 
    // //1. min-price
    // //2. max-price
    // //3. type
    // //4. no parameters show all

   //i need to handle a case where min, max and type is present
   //i need to handle a case where only min is present
   // i need to handle a case where only max is present
   //i need to handle a case where only type is present
   //i need to handle a case where none of the req.query is present
   //or any of the 1 or 2 of the req.query is present

   const filteredShoes =  shoes.filter( shoe => {
    
    //if any of the  { min-price, max-price, type } req.query
    //is not present then it will default to true so the current shoe will NOT get filtered by its req.query { min-price, max-price, type }
    const meetsMin = min_price ? shoe.price >= min_price : true
    const meetsMax = max_price ? shoe.price <= max_price : true
    const meetsType = shoe_type ? shoe.type === shoe_type : true
    
    //if any of the above evaluate to false then the current shoe will not be added to the filtered result
    return meetsMin && meetsMax && meetsType
   })

   return res.send(filteredShoes)

})



///D. listen to PORT 3000

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})