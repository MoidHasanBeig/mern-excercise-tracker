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

router.route('/:id').get((req,res) => {
  Excercise.findById(req.params.id)
    .then(excercise => res.json(excercise))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route('/:id').delete((req,res) => {
  Excercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Excercise deleted!"))
    .catch(err => res.status(400).json("Error:" + err));
});

router.route('/:id').patch((req,res) => {
  Excercise.update(
    {_id:req.params.id},
    {$set: req.body},
    function(err) {
      if(!err) {
        res.json("Updated successfully!");
      } else {
        res.status(400).json("Error:" + err);
      }
    }
  );
});

module.exports = router;
