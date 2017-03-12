const jwt   = require('jwt-simple'); 
const User  = require('../models/user');
const config = require('../config');

function tokenForUser(User) {
    const   timestamp = new Date().getTime();
    return jwt.encode({ sub: User.id, iat: timestamp  }, config.secret);
}

exports.signin = function (req, res, next) {
    // User has already been verfied, just give them their token. 
    res.json( { success: 'true', token: tokenForUser(req.user) })
}

exports.signup = function(req,res,next) {
    const email = req.body.email; 
    const password  = req.body.password;
    if(!email || !password) {
        return res.status(422).send({ error: 'Must provide Email and Password'});
    }
    // see if a user with a given email exists: 
    User.findOne( {email: email}, function (err, existingUser) {
        // if a user with email does exist, return an error 
        if (err) {return next(err);} 

        if (existingUser) {
            return res.status(422).json({ error: 'Email is in use'}); // unprocessable entity code
        }

        // if a user with email does NOT exist, create and save user record 
        const user = new User({
            email: email, 
            password: password
        });

        user.save(function (err){
            if (err) { return next(err) };
            // Respond to request indicating the user was created 
            res.json({ success: 'true', token: tokenForUser(user) });
        });
        
        
    });

}