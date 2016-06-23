var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/linkedin',
  passport.authenticate('linkedin'),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
});

// router.get('/linkedin',
//   passport.authenticate('linkedin', { scope: ['r_basicprofile', 'r_emailaddress'] }));

router.get('/linkedin/callback',
    passport.authenticate('linkedin', {
    successRedirect: '/',
    failureRedirect: '/'
}));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
