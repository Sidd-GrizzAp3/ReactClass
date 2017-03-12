const passport  = require('passport')
const User      = require('../models/user')
const config    = require('../config')
const JwtStrategy   = require('passport-jwt').Strategy
const ExtractJwt    = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')
const bcrypt        = require('bcrypt-nodejs')

const localOptions = { usernameField: 'email' }

// Create local strategy 
const localLogin = new LocalStrategy(localOptions, function(email, password, done){
    /// Verify this email and password, call done with the user
    // call either done with user or null depending on errors. 

    User.findOne({email: email}, function (err, user) {
        if (err) { return done(err) }
        if (!user) { return done(null, false) }
        // found user: now compare passwords: 
        user.comparePassword(password, function(err, isMatch){
            if (err) { return done(err) }
            if (!isMatch) { return done(null, false) }
            return done(null, user)
        })
    })

})


// Setup options for jwt strategy 
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'), 
    secretOrKey: config.secret
}

// Create JWT strategy 
const jwtLogin = new JwtStrategy(jwtOptions, function (payload,done){
    // See if the User ID in the payload exists in our database
    // If it does, call 'done' with that user
    //  otherwise, call done with out a user object 
    User.findById(payload.sub, function (err, user){        
        if (err) { return done(err, false) }
        if (user) {
            done(null, user) 
        } else {
            done(null, false)
        }
    })
})
//Tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)