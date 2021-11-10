const knex = require("./knex");

function addUser(user) {
  return knex("users").insert(user);
}

function getAllUsers() {
  return knex("userID").select("*");
}

function updateUser(userID, user) {
  return knex("users").where("userID", userID).update(user);
}

module.export = {
  addUser,
  getAllUsers,
  updateUser,
};
