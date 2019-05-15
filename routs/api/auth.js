const express = require('express');
const router = express.Router();


// @route   GET api/auth
// @desc    Test rout 
// @access  Public

router.get('/', (ewq,res)=> {
res.send('Auth rout')
});

module.exports=router;