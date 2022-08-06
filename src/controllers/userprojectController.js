const dbConnection = require("../database/connection");

var connection = dbConnection.getConnection();

connection.connect();

var express = require("express");

var router = express.Router();

//SELECT * FROM USER WHERE id IN (SELECT user_id FROM userproject WHERE project_id = id)
router.get("/:id", (req, res) => {
    connection.query("select * from user where id in (select user_id from userproject where project_id =" + req.params.id + ")", (error, data) => {
        if (error) {
            console.log("Error while fetching data");
        }
        res.send(data);
    });
});

module.exports = router;