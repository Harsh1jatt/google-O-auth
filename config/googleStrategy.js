const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK,
    }, 
    function(accessToken, refreshToken, profile, done) {
        console.log('Google profile:', profile);
        

        done(null, profile);
    })
);


passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    // User.findById(id, function (err, user) {
    //     done(err, user);
    // });

    // For demonstration, returning the id as user object
    done(null, { id });
});
