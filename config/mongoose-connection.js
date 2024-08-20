const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log('Successfully Connected To DataBase!');
    }
    catch(err){
        log.err('Error Connecting To DB')
        process.exit(1);
    }
}

module.exports = connectDB;