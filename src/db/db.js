const mongoose = require('mongoose');

async function connectDB() {
    
    await mongoose.connect('mongodb://Shanu:Shanu1234@ac-u6kjcu1-shard-00-00.upxzl7d.mongodb.net:27017,ac-u6kjcu1-shard-00-01.upxzl7d.mongodb.net:27017,ac-u6kjcu1-shard-00-02.upxzl7d.mongodb.net:27017/PostApp?ssl=true&replicaSet=atlas-mx0xuz-shard-0&authSource=admin&appName=YT-backend')
    
    console.log("Connected to DB");

}

module.exports = connectDB;