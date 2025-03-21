const mongoose = require('mongoose');
const Streamer = require('./streamer');

const subscriberSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    streamers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Streamer'
    }]
});

// Model
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;
