var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewsSchema = new Schema({
    img: String,
    name: String,
    message: String
});

module.exports = mongoose.model("reviews", ReviewsSchema);

