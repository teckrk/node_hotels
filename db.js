const mongoose = require('mongoose');

// define the mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels'

// setup mongodbconnection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected',  ()=>{
    console.log('connected to mongoDB server');
});

db.on('disconnected',  ()=>{
    console.log('Disconnected to mongoDB server');
});

db.on('error',  (err)=>{
    console.log('connected to mongoDB server', err);
});

// hello test comment
module.exports = db;