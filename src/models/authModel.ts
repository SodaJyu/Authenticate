export {};

let knex = require("../knex");

const usersTable = "users";

const getAllUsers = () => {
    return knex.select({
        id: "id",
        username: "username",
        password: "password"
    })
    .from(usersTable);
};

const getUserById = (id: Number) => {
    return knex.select({
        id: "id",
        username: "username",
        password: "password"
    })
    .from(usersTable)
    .where({id: id})
    .first();
};

const createUser = (user: Object) => {
    return knex.insert(user).into("users").catch(console.error);
};

const updateUser = (id: Number, updatedUser: Object) => {
    return knex("users")
    .update(updatedUser)
    .where({id: id})
    .catch(console.error());
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser
}