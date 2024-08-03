const mongoose = require('mongoose');

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
  },

  process:[
    { 
     type: mongoose.Schema.Types.ObjectId,
     ref: 'processDetails',
    }
   ]
 
});

const spicesDetails = mongoose.model('spicesDetails', spiceSchema);

module.exports = spicesDetails;
