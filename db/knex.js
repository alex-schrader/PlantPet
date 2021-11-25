const knex = require("knex");
//connect sqlite3 to database for storing user data and progress
const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "users.sqlite3"
    }
});

module.exports = connectedKnex;