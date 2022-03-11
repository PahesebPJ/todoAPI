require('dotenv').config();

const express = require('express');
const app = express();
var cors = require('cors');

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public')); //Middleware for serving static files

//Routes

app.get('/', (req, res) => {
    res.send('You are not expected to be here :)');
});

var userAPI = require("./controllers/userController");
app.use("/api/users",userAPI);

var userProjectAPI = require("./controllers/userProjectController");
app.use("/api/userprojects",userProjectAPI);

var taskAPI = require("./controllers/taskController");
app.use("/api/task",taskAPI);


//App listening
app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}!`)
});