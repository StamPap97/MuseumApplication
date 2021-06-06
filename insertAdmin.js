const mongoose = require('mongoose');
const mongoAtlasUri = "mongodb+srv://StamPap97:Su6GhnY79Jpn3BvE@cluster0.gkcmr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const adminSchema = require('./models/model_admin');
    // Connect to the MongoDB cluster
const apromise = new Promise((resolve,reject) =>{
  mongoose.connect( mongoAtlasUri,{ useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    if(err){
      reject(err);
    }
    else{
      console.log(" Mongoose is connected");
    }
  });
      adminSchema.insertMany([
        { username: "Konstantinos",
          last_name: "Palios",
          Email: "konpalios@gmail.com",
          phone:6943910197,
          password : "1234567800"
      
        },
        {
        username: "Stamatis",
        last_name: "Papadopoulos",
        Email: "StamPap@gmail.com",
        phone:6944910197,
        password : "0087654321"
        },
        {
          username: "admin",
          last_name: "admin",
          Email: "admin",
          phone:6943977197,
          password : "12345admin" 
        }], function(err) {
        if(err != null){
          reject(err);
        }else{
          resolve('ok');
        }
      
        });
      });
apromise.then(handleResolved =>{
  mongoose.disconnect();
  } , 
  handleRejected =>{
    console.log(handleRejected);
    mongoose.disconnect();
  });