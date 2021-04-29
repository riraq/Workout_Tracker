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

router.put('/workouts/:id', async ({ params, body }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    {
      $push: { 
        exercises: body 
      }
    }
  )
  .then(dbUser => {
    res.json(dbUser);
  })
  .catch(err => {
    res.json(err);
  });
});

router.get('/workouts/range', async (req, res) => {
  db.Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: '$exercises.duration' }
      }
    }
  ])
  .then(dbNote => {
    res.json(dbNote);
  })
  .catch(err => {
    res.json(err);
  });});

module.exports = router;