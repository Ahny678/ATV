const mongoose = require('mongoose');
const Subscriber = require('./subscriber');
const Streamer = require('./streamer');
// Subscription Schema (Join Model)
const subscriptionSchema = new mongoose.Schema({
    subscriber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subscriber',
        required: true
    },
    streamer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Streamer',
        required: true
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
module.exports = Subscription;