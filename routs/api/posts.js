const express = require('express');
const router = express.Router();


// @route   GET api/posts
// @desc    Test rout 
// @access  Public

router.get('/', (ewq,res)=> {
res.send('Posts rout')
});

module.exports=router;