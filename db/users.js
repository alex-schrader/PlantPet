const knex = require("./knex");

function createUser(user) {
  return knex("users").insert(user);
}

function getAllUsers() {
  return knex("users").select("*");
}

function deleteUser(UserID) {
    return knex("users").where("UserID", UserID).del()
}

function updateUser(UserID, user) {
  return knex("users").where("UserID", UserID).update(user);
}

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
