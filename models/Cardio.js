const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
    cardioName: String,
    distance: Number,
    duration: Number
});

const Cardio = mongoose.model('Cardio', CardioSchema);

module.exports = Cardio;