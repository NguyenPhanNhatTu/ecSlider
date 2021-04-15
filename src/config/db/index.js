const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb+srv://nguyenphannhattu:123456AsZx@cluster0.9cp9f.mongodb.net/UpLoadImage?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true});
    console.log('Success');
  } 
  catch (error) {
    console.log('fail');
  }
}
module.exports ={connect};