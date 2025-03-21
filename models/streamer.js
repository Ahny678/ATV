const mongoose = require('mongoose');
const Subscriber = require('./subscriber')

const streamerSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    subscribers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Subscriber,
    }]
});

const Streamer = mongoose.model('Streamer', streamerSchema);
module.exports = Streamer;