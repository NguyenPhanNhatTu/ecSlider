const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Image = new Schema({
  nameimage: {type:String, required: true,},
  url: {type:String, required: true},
},{
  timestamps: true,
});


module.exports=mongoose.model('Image', Image);