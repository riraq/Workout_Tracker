const router = require('express').Router();
const path = require('path');

const db = require('../models')

router.get('/workouts', async (req, res) => {
  try {
    console.log("hello")

    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/exercise', async (req, res) => {
  console.log(__dirname)
  try {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  } catch (err) {
    // console.log(err);
    res.status(400);
  }
});

router.get('/stats', async (req, res) => {
  console.log(__dirname)
  try {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  } catch (err) {
    // console.log(err);
    res.status(400);
  }
});

module.exports = router;