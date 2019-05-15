mongoos = require('mongoose');

const UserSchema = new mongoos.Scheam({
    name:{ 
        type:String,
        required:TextTrackCueList
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar : {
        type:String
    },
    data:{
        type:Date,
        default:Date.now
    }
});

module.exports = User = mongoos.model( 'user' , UserSchema);