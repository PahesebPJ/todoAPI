const dbConnection = require("../config/db_connection");

var connection = dbConnection.getConnection();

connection.connect();

var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
    connection.query("select * from task ", (error, data) => {
        if (error) {
            console.log("Error while fetching data");
        }
        res.send(data);
    });
});

router.get("/:id", (req, res) => {
    connection.query("select * from task where project_id = "+req.params.id, (error, data) => {
        if (error) {
            console.log("Error while fetching data");
        }
        res.send(data);
    });
});


module.exports = router;