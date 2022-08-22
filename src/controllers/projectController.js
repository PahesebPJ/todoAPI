const dbConnection = require("../database/connection");

var connection = dbConnection();

const projectController = {
    project: (req,res) => {
        connection.query("select * from project where id in (select project_id from userproject where user_id ="+req.params.id+")", (error, data) => {
            if (error) {
                console.log("Error while fetching data");
            }
            res.send(data);
        });
    }
}
module.exports = projectController;