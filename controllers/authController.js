const db = require("../models");
const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };
    
    // needs to add for name error.
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
          errors[properties.path] = properties.message;
        });
      }
      return errors;
}

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'home secret code', {
        expiresIn: maxAge
    });
};

module.exports = {
    signupGet: function(req, res)  {
        res.render('signup');
    },

    signupPost: async function(req, res)  {
        const { name, email, password } = req.body;
      
        try {
          const user = await db.User.create({ name, email, password });
          const token = createToken(user._id);
          res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
          res.status(201).json({ user: user._id });
        }
        catch(err) {
          const errors = handleErrors(err);
          res.status(400).json({ errors });
        }
       
    },

    loginGet: function(req, res)  {
        res.render('login');
    },

    

    loginPost: async function(req, res)  {
        const { email, password } = req.body;
      
        console.log(email, password);
        res.send('user login');
    }
}