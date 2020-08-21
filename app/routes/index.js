const todoRoutes = require('./todo_routes');

module.exports = function(app, db){
    console.log('it works');
    todoRoutes(app, db);
