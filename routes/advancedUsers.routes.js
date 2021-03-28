const AdvancedUsersController = require("../controllers/advancedUsers.controller");
const AdvancedUsers = require("../models/advancedUsers.model");

module.exports = app => {
    // GET ALL
    app.get("/api/users", AdvancedUsersController.findAllUsers)
    // GET ONE BY ID
    app.get("/api/users/:_id", AdvancedUsersController.findOneUser)
    // GET ONE BY USERNAME
    app.get("/api/users/username/:username", AdvancedUsersController.findOneUserByUsername)
    // GET ONE BY EMAIL
    app.get("/api/users/email/:email", AdvancedUsersController.findOneUserByEmail)
    // CREATE
    app.post("/api/users/new", AdvancedUsersController.createOneUser)
    // UPDATE
    app.put("/api/users/update/:_id", AdvancedUsersController.updateOneUser)
    // DELETE
    app.delete("/api/users/delete/:_id", AdvancedUsersController.deleteOneUser)
}