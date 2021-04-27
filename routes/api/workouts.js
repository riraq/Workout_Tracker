const router = require('express').Router();

const db = require('../../models')

router.post('/workouts', async (req, res) => {
  try {
    console.log("res: ", res)

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/workouts/:id', async (req, res) => {
  try {
    console.log("res: ", res)

    res.status(200).json(userData);
    } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;