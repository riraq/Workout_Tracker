const router = require('express').Router();

const db = require('../../models')

router.get('/workouts', async (req, res) => {
  db.Workout.find({})
  .then(dbNote => {
    res.json(dbNote);
  })
  .catch(err => {
    res.json(err);
  });});

router.post('/workouts', async (req, res) => {
  try {
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/workouts/:id', async (req, res) => {
  try {
    res.status(200).json(userData);
    } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;