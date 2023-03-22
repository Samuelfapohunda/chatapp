const { Schema, default: mongoose } = require("mongoose");

const RegisterSchema = new Schema({
 firstname: {
        type: String, 
        required: true,
    },

   lastname: {
        type: String, 
        required: true,
      
    },

    email:{
        type: String, 
        required: true,
          unique: true
    },

   password:{
        type: String, 
        required: true,
    },
    
});

module.exports = mongoose.model("Register", RegisterSchema)