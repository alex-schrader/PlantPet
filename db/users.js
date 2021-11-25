const knex = require("./knex");

//create a new user
function createUser(user) {
  return knex("users").insert(user);
}

//retrieve all user data
function getAllUsers() {
  return knex("users").select("*");
}


//delete a user
function deleteUser(UserID) {
  return knex("users").where("UserID", UserID).del();
}

//delete user information
function updateUser(UserID, user) {
  return knex("users").where("UserID", UserID).update(user);
}

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
