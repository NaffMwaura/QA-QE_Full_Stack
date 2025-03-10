import express, {Request, Response, NextFunction} from "express"
import dotenv from 'dotenv'
import 'dotenv/config'
import { readFileSync } from "fs"
import path from 'path'
import cors from "cors"

type Book =  {
    id: number;
    title: string;
    author: string;
    genre: string;
    year: number;
    pages: number;
    publisher: string;
    description: string,
    image: string,
    price: number;
    quantity?:number;
}

type Books = Book[]
export {Books, Book}
//configure the dotenv 
//top most level
dotenv.config({path: __dirname+"./../.env"})

//instance of express
//the second most top level
const app = express()

//load the variables
const port = process.env.PORT
const secret = process.env.SECRET
console.log(port) //3000
//console.log(secret) //a_very_strong_secret_for_you



//enable CORS for all origins  
//app.use(cors())

//enable cors with optiosn (RECOMMENDED)
//To allow only http://localhost:5173:
app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, PUT,DELETE",
    credentials: true //allows cookies and auth headers
}))


//midle wares
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//get the current  directory 
const _dirname = path.resolve()


//synchronously read the file
const booksData :any= readFileSync(
    path.join(_dirname, "src", "db", "books.json"), "utf-8"
)

//console.log(booksData)



//a simple get request saying hello world  
// app.get('/', (req, res) => {
//     res.send(`Hello World, Be humble to us`)
// })

app.get('/api/booksData', (req:Request, res: Response) => {
    try {
        const booksObject = JSON.parse(booksData);
        res.json(booksObject.books);
    } catch (error) {
        console.error("Error parsing books data:", error);
        res.status(500).json({ error: "Failed to load books data" });
    }
});


//Now, let's create a GET API route that filters events based on query parameters
app.get('/api/booksFilter', (req:Request, res:Response) => {
    try {
        const booksObject = JSON.parse(booksData);
        const {title, author, genre, years} = req.query

        //on the first filters, the whole evets havent been filtered
        let filteredBooks = [...booksObject.books]

        //filtering logic
        if(title) {
            filteredBooks = filteredBooks.filter((book) => book.title.toLowerCase().includes((title as string).toLowerCase()))
        }
        if(genre) {
            filteredBooks = filteredBooks.filter((book) => book.genre.toLowerCase().includes((genre as string).toLowerCase()))
        }
        if(author) {
            filteredBooks = filteredBooks.filter((book) => book.author.toLowerCase().includes((author as string).toLowerCase()))
        }
        res.send(filteredBooks)
    } catch (error) {
        
    }
})



app.post('/api/v1/users', (req: Request, res: Response) => {

    //lets destructure the incoming body request 
    //const body = req.body 
    //const userName = req.body.user
    // const  {title, fname, lname, password} = req.body

    const userData: { id: number; [key: string]: any }[] = [];

    const { body } = req

    //if the userdata is empty, the id will be 1 else we will add 1 to the last id in the lenght
    const newId = userData.length > 0 ? userData[userData.length - 1].userID + 1 : 1

    //push the object data to userObject 
    const newData = { id: newId, ...body }
    userData.push(newData)

    //send it to the server 
    res.status(201).json({
        message: "Successfully posted",
        payload: newData
    })

})



const userData: { id: number; userName: string; displayName: string }[] = [];

app.put('/api/v1/users/:id', (req: Request, res: Response) => {
    const userId = Number(req.params.id);
    const { userName, displayName } = req.body;

    // Validate input
    if (isNaN(userId)) {
        res.status(400).json({ message: "Invalid user ID" });
        return;
    }

    // Find the user index
    const userIndex = userData.findIndex((user) => user.id === userId);

    // If user is not found
    if (userIndex === -1) {
        res.status(404).json({ message: "User not found" });
        return;
    }

    // Update user data (make sure to retain all properties)
    userData[userIndex] = { id: userId, userName, displayName };

    res.json({ message: "User successfully updated", user: userData[userIndex] });
});






// create server 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

//SOC - separtion of concerns 