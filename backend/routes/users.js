const router = require('express').Router();
let User = require('../models/user.model');

router.Route('/').get((req,res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error:' + err));
});

router.Route('/add').post((req,res) => {
  const newUser = new User({
    username: req.body.username
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;
