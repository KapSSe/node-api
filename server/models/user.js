const mongoose = require('mongoose');

const User = mongoose.model('User',{
    username:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        trim: true,
        minlength: 1
    }
})

module.exports = {
    User
}