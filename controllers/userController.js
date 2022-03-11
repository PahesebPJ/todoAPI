const dbConnection  = require("../config/db_connection");

var connection = dbConnection.getConnection();

connection.connect();

var express = require("express");

var router = express.Router();

router.get("/",(req,res) => {
    connection.query("select * from user",(error,data) => {
        if (error) {
            console.log("Error while fetching data");
        }
        res.json(data);
    });
});

router.get("/:id",(req,res) => {
    connection.query("select * from user where id="+req.params.id,(error,data) => {
        if (error) {
            console.log("Error while fetching data");
        }
        res.send(data);
    })
})

router.post("/",(req,res) => {

    var user = {
        id: req.body.id,
        name: req.body.name,
        lastname: req.body.lastname,
        password: req.body.password,
        username: req.body.username,
        email: req.body.email,
        picture: req.body.picture
    }

    connection.query("insert into user values('"+user.name+"','"+user.lastname+"','"+user.password+"','"+user.username+"','"+user.email+"','"+user.picture+"'",
    (error,result) => {
        if (error) {
            console.log("Error while inserting data"+error);
        }
        res.send({insert: "success"});
    })
})

router.put("/",(req,res) => {

    var user = {
        id: req.body.id,
        name: req.body.name,
        lastname: req.body.lastname,
        password: req.body.password,
        username: req.body.username,
        email: req.body.email,
        picture: req.body.picture
    }

    connection.query("update user set name='"+user.name+"',lastname='"+user.lastname+"',password='"+user.password+"',username='"+user.username+"',email='"+user.email+"',picture='"+user.picture+"' where id="+user.id,
    (error) => {
        if (error) {
            console.log("Error while updating data"+error);
        }
        res.send({update: "success"});
    })
})


router.delete("/:id",(req,res) => {
    connection.query("delete from user where id="+req.params.id,(error) => {
        if (error) {
            console.log("Error while deleting data");
        }
        res.send({delete:"Delete success"});
    })
})


module.exports = router;