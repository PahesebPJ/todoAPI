const dbConnection = require('../database/connection');
const { login } = require('../database/query');
require('dotenv').config();


const jwt = require('jsonwebtoken');
const connection = dbConnection();

function generateAccessToken(username) {
    return jwt.sign(username, process.env.JWT, {
        expiresIn: 300,
    });
}

const loginController = {
    loginUser: (req, res) => {
        const {username, password} = req.body;
        connection.query(login.loginUser,[username], (err, data) => {
            if(err) console.log(err);

            if(data.length > 0) {

                if(data[0].password === password) {
                    const username = data[0]?.username;

                    token = generateAccessToken({username: username});

                    res.json({
                        auth:true,
                        token:token,
                        result: data,
                        message: "User loged succesfully!"
                    });

                } else {
                    res.send({
                        auth: false,
                        message: "Wrong Username/password"
                    });
                }

            } else {
                res.send({
                    auth: false,
                    message: "User doesn't exist"
                });
            }
        })
    }
}

module.exports = loginController;