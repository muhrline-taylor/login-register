const Users = require("../models/advancedUsers.model");

module.exports.findAllUsers = (req, res) => {
    Users.find()
        .then(allUsers => res.json({Users: allUsers}))
        .catch(err => res.json({message: "Something went wrong grabbing all the users", error: err}))
}

module.exports.findOneUser = (req, res) => {
    Users.findOne({_id: req.params._id})
        .then(oneUser => res.json({Users: oneUser}))
        .catch(err => res.json({message: "Something went wrong grabbing the user!", error: err}))
}

module.exports.findOneUserByUsername = (req, res) => {
    Users.findOne({username: req.params.username})
        .then(oneUser => res.json({Users: oneUser}))
        .catch(err => res.json({message: "Something went wrong grabbing the user!", error: err}))
}

module.exports.findOneUserByEmail = (req, res) => {
    Users.findOne({email: req.params.email})
        .then(oneUser => res.json({Users: oneUser}))
        .catch(err => res.json({message: "Something went wrong grabbing the user!", error: err}))
}

module.exports.createOneUser = (req, res) => {
    Users.create(req.body)
        .then(addUser => res.json({Users: addUser}))
        .catch(err => res.json({message: "Something went wrong creating the user!", error: err}))
}

module.exports.updateOneUser = (req, res) => {
    Users.updateOne({_id: req.params._id}, req.body, {runValidators: true})
        .then(oneUser => res.json({Users: oneUser}))
        .catch(err => res.json({message: "Something went wrong updating the user!", error: err}))
}

module.exports.deleteOneUser = (req, res) => {
    Users.deleteOne({_id: req.params._id})
        .then(res.json({message: "User deleted!"}))
        .catch(err => res.json({message: "Something went wrong deleting the user!", error: err}))
}