const mongoose = require('mongoose')

const DB = process.env.Mongo_url

mongoose.connect(DB).then(() => {
    console.log('database connection established successfully');
}).catch((error) => {
    console.log('database connection failed',error);
})