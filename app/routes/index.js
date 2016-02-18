var express = require('express');
var router = express.Router();

// Require controllers.
var usersController   = require('../controllers/users');
var workoutsController   = require('../controllers/workouts');
var commentsController = require('../controllers/comments');

// GET home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// users resource paths:
router.get('/users',     usersController.index);
router.get('/users/:id', usersController.show);// users resource paths:

//workouts resource paths:
router.get('/workouts',     workoutsController.index);
router.get('/workouts/:id', workoutsController.show);
router.post('/workouts/new', workoutsController.create);
router.put('/workouts/:id', workoutsController.update);
router.delete('/workouts/:id', workoutsController.destroy);

module.exports = router;
