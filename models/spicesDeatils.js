const mongoose = require('mongoose');
const { type } = require('os');

const spiceSchema = new mongoose.Schema({
  spicesName: {
    type: String,
    required: true,
  },
  fertilisersUsed:[{
    type:String,
  }],
  Type:{
    type:String,
    required:true
  },
  Image:{
    type:String,
    required:true
  },
  spices:[
    { 
     type: mongoose.Schema.Types.ObjectId,
     ref: 'processDetails',
    }
   ]
 
});

const spicesDetails = mongoose.model('spicesDetails', farmSchema);

module.exports = spicesDetails;
