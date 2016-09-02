var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var worksSchema = new Schema({
    tinyImg: String,
    bigImg: String
});

module.exports = mongoose.model("works", worksSchema);