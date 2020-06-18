const router = require('express').Router();
let Excercise = require('../models/excercise.model');

router.route('/').get((req,res) => {
  Excercise.find()
    .then(excercises => res.json(excercises))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) => {
  const newExcercise = new Excercise({
    username: req.body.username,
    description: req.body.description,
    duration: Number(req.body.duration),
    date: Date.parse(req.body.date)
  });

  newExcercise.save()
    .then(() => res.json('Excercise added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;
