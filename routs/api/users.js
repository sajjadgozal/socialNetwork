const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route   GET api/users
// @desc    Register User
// @access  Public

router.post(
    '/',
[
    check('name' , 'Name is required')
    .not()
    .isEmpty(),

    check('email' , 'enter a valid email')
    .isEmail(),

    check('password' , 'enter a password mor than 5 char')

],
 (req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }else{
        return res.status(200);
    }
    res.send('user rout');
});

module.exports=router;