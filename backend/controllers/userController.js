const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Define your secret key
const secretKey = 'yourSecretKey'; // Replace 'yourSecretKey' with your actual secret key

// Creating token function:
const createToken = (_id) => {
    return jwt.sign({ _id }, secretKey, { expiresIn: '3d' });
};

// Signup user
const signupUser = async (req, res) => {
    const { email, password,isAdmin } = req.body;
    try {
        const user = await User.signup(email, password,isAdmin);

        // Create a token
        const token = createToken(user._id);
        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Login user
const loginUser = async (req, res) => {
    const{email,password}=req.body
    try{
        const user = await User.login(email,password)
        //creating a token
        const userEmail = user.email;
        const token = createToken(user._id);
        const isAdmin = user.isAdmin;

        res.status(200).json({userEmail, token, isAdmin})
    }catch(error){
        res.status(400).json({error:error.message})
    }




};

module.exports = {
    signupUser,
    loginUser
};
