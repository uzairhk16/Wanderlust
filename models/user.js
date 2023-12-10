// Authentication and Authorization
// npm i passport, npm i passport-local, npm i passport-local-mongoose
// Hashing, Salting

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
});

userSchema.plugin(passportLocalMongoose);
// <= Automatucally sets username password hasing and salting

module.exports = mongoose.model("User", userSchema);

