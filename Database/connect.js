const { MongoGridFSChunkError } = require('mongodb');
const mongoose = require('mongoose');
const config = require('./config.json');

async function connect() {
    mongoose.connect(config.MONGOURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.once("open", () => {
        console.log("[DATABASE]: Connected to database");
    })
    return;
}
module.exports = connect;

