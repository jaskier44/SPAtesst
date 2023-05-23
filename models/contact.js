const mongoose = require("mongoose");

let Schema = mongoose.Schema({
    "firstname":String,
    "lastname":{"type":String,"index":true},
    email:String,
    "phone":String
});

//next comes compiling our schema into a Model
module.exports = mongoose.model("Contact",Schema);