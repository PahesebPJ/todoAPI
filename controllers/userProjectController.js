const dbConnection = require("../config/db_connection");

var connection = dbConnection.getConnection();

connection.connect();

var express = require("express");

var router = express.Router();
//SELECT * FROM project WHERE id IN (SELECT project_id FROM userproject WHERE user_id = 1)
router.get('/:id', (req, res) => {
    connection.query("select * from project where id in (select project_id from userproject where user_id ="+req.params.id+")", (error,data) =>{
        if (error) {
            console.log("Error while fetching data");
        }
        res.send(data);
    });
});

module.exports = router;