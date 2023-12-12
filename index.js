var express = require('express');
const mongoose = require("mongoose");
const app = express();  // Declare 'app' once
const cors = require("cors");

app.use(express.json());
app.use(cors());

let connectToDatabase = require("./connectDb");
let users = require("./src/routes/users");
let books = require("./src/routes/books");

app.use("/users", users);
app.use("/books", books);

mongoose.set("strictQuery", false);
connectToDatabase();

app.get('/', (req, res) => {
    res.send("Hello World....");
});

console.log('Backend is running on port 8020.');
app.listen(8020);
