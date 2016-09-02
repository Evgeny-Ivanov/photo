var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServicesSchema = new Schema({
    name: String,
    title: String,
    img: String,
    message: String,
    shortMessage: String
});

module.exports = mongoose.model("services", ServicesSchema);
