const express = require('express');
const router = express.Router();


// @route   GET api/profile
// @desc    Test rout 
// @access  Public

router.get('/', (ewq,res)=> {
res.send('Profile rout')
});

module.exports=router;