var express = require('express');
var router = express.Router();
// routes req in from the user controller 
var userCtrl = require("../controllers/users");


router.get('/', function(req, res, next) {
  res.render('index.ejs', {user: req.user} );
});

// Get User
router.get('/user', userCtrl.index);

//post fact
router.post("/post", userCtrl.addPost);

// Delete posts
router.delete('/posts/:id', isLoggedIn, userCtrl.delPost);
// edit posts router
router.put('/posts/:id', isLoggedIn, userCtrl.editPost);

function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }







module.exports = router;
