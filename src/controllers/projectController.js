const dbConnection = require("../database/connection");

var connection = dbConnection();

const projectController = {
    project: (req,res) => {
        connection.query("select * from project where id in ("+req.params.id, (error, data) => {
            if (error) {
                console.log("Error while fetching data");
            }
            res.send(data);
        });
    }
}
module.exports = projectController;