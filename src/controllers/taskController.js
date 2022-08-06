const dbConnection = require("../database/connection");
const { task } = require("../database/query");

var connection = dbConnection();

const taskController = {
    getAllTasks: (req, res) => {
        connection.query(task.getAllTasks, (error, data) => {
            if (error) {
                console.log("Error while fetching data");
            }
            res.send(data);
        });
    },
    getTaskById: (req, res) => {
        connection.query(task.getTaskById, (error, data) => {
            if (error) {
                console.log("Error while fetching data");
            }
            res.send(data);
        });
    }
}

module.exports = taskController;