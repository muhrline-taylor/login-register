const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

var UsersSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "First name is required"],
        minlength: [2, "First name must be at least 2 characters"],
    },
    lname: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [2, "Last name must be at least 2 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already registered"],
        unique: true,
        dropDups: true,
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        minlength: [8, "Username must be at least 8 characters"],
        unique: true,
        dropDups: true,
    },
    password: {
        type:String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"]
    },
}, {timestamps: true})

UsersSchema.plugin(uniqueValidator);

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;