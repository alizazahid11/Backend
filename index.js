var express = require('express');
var app = express();
let users = require("./src/routes/users");
let books = require("./src/routes/books")

app.use("/users", users);
app.use("/books", books);

console.log('Backend is running on port 8080.')
app.listen(8080);