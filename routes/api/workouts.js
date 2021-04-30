const router = require('express').Router();

const db = require('../../models')

router.get('/workouts', async (req, res) => {
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

router.post('/workouts', async ({body}, res) => {
    db.Workout.create(body)
      .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
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