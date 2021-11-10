const knex = require("./knex");

function createUser(user) {
  return knex("users").insert(user);
}

function getAllUsers() {
  return knex("users").select("*");
}

function updateUser(userID, user) {
  return knex("users").where("UserID", userID).update(user);
}

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
};
