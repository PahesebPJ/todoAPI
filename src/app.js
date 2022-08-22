require('dotenv').config();

const express = require('express');
const app = express();
var cors = require('cors');

//Importing routes
const loginRoute = require('./routes/login.routes');
const taskRoute = require('./routes/task.routes');
const projectRoute = require('./routes/projects.routes');

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/public')); //Middleware for serving static files

//Routes
app.use(loginRoute);
app.use(taskRoute);
app.use(projectRoute);

//App listening
app.listen(process.env.PORT, () => {
    console.log(`App running on port ${process.env.PORT}!`)
});