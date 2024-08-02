const mongoose = require('mongoose');
const { type } = require('os');


const processSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Date:{
    type:Date,
    required:true
  },
  isActive:{
    type:Boolean,
    default:false
  },
  isCompleted:{
    type:Boolean,
    default:false
  },
  Image:{
    type:String,
  },
  Location:{
    type:String
  }
 
});

const processDetails = mongoose.model('processDetails', processSchema);

module.exports = processDetails;
