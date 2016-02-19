var express = require('express');
var router = express.Router();

// Require controllers.
var usersController   = require('../controllers/users');
var workoutsController   = require('../controllers/workouts');

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);
router.post('/users/new', usersController.create);
router.post('/login', usersController.userAuth);
router.put('/users/:id',  usersController.tokenVerify, usersController.update);
router.delete('/users/:id', usersController.tokenVerify, usersController.destroy);

//workouts resource paths:
router.get('/workouts',     workoutsController.index);
router.get('/workouts/:id', workoutsController.show);
router.post('/workouts/new', usersController.tokenVerify, workoutsController.create);
router.put('/workouts/:id', usersController.tokenVerify, workoutsController.update);
router.delete('/workouts/:id', usersController.tokenVerify, workoutsController.destroy);
router.post('/workouts/:id/comments', usersController.tokenVerify, workoutsController.createComment);
router.put('/workouts/:id/favCount',  usersController.tokenVerify, workoutsController.favCount);

module.exports = router;
