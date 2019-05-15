const express = require('express');
const connectDB = require('./config/db');


const app = express();
//connect to dataBase 
connectDB();

// init middleWare
app.use(express.json({extended: false}));


app.get('/' , (req,res)=>{
    res.send('API Running');
})



//Define routs 
app.use('/api/users', require('./routs/api/users'));
app.use('/api/auth', require('./routs/api/auth'));
app.use('/api/profile', require('./routs/api/profile'));
app.use('/api/posts', require('./routs/api/posts'));



const PORT = process.env.PORT || 3000 ;
app.listen(PORT , () => console.log(`app in listenning on port ${PORT}` ));
