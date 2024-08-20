const express = require('express');
const router = express.Router();
const { googleOauth } = require('../controllers/authController');
const passport = require('passport');


router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
        console.log('User signed in:', req.user);
        res.send(req.user);
    }
);
module.exports = router;