const mongoose = require('mongoose');


const farmSchema = new mongoose.Schema({
  farmName: {
    type: String,
    required: true,
  },
  ownerName:{
    type:String,
    required:true
  },
  spices:[
   { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'spicesDetails',
   }
  ]
 
});

const farmDetails = mongoose.model('farmDetails', farmSchema);

module.exports = farmDetails;
