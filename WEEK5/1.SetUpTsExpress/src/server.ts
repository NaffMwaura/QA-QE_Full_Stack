import express from "express"
import dotenv from "dotenv"


//configure the dotenv
dotenv.config()

//instance of express
const app = express()


//load the variables

const port = process.env.PORT
console.log(port) // 3000

//a simple get request saying hello world
    
app.get('/' , (req , res) =>{
    res.send('hello world, be humble to us' )
})

//create server

app.listen(port, () =>{
    console.log(`server is running on port ${port}`)
})