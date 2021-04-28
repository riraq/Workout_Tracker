const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: Date,
    exercises: [
        {
            type: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number
        }
    ]
});

const Workout = mongoose.model('Workout', ExerciseSchema);

module.exports = Workout;