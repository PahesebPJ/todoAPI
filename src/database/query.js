module.exports = {
    login: {
        loginUser: 'SELECT * FROM user WHERE username = ?'
    },
    task: {
        getAllTasks: 'SELECT * FROM task',
        getTaskById: 'SELECT * FROM task WHERE id = ?'
    }
}