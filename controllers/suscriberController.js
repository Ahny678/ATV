const Subscriber = require('../models/subscriber')
exports.getAllSuscribers = async (req, res, next)=>{
    try{
        const subscribers = await Subscriber.find();
        res.status(200).json({message: `${subscribers}`});
    }catch(err){
        res.status(500).json({message: 'Error retrieving suscribers', error:err})
    }
}

exports.createSubscriber = async(req, res, next)=>{
    try{
        const newSub = new Subscriber({
            name: req.body.name,
            streamers: []
        })
        console.log(req.body);
        await newSub.save();
        res.status(201).json({message:`Subscriber: ${newSub.name} created successfully`})
    }catch(err){
        res.status(400).json({message: 'Bad request', error:err})
    }
}