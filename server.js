//1. get a hold of express
const express = require('express')

//2. invoke express
const app = express()

//3. PORT assignment
const PORT = 3000


///4. listen to PORT 3000

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})