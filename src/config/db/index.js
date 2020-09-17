const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/hoc_nodejs_express_mongodb_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Conect Successfully');
    } catch (error) {
        console.log('Conect Failure');
        
    }
}

module.exports = { connect };