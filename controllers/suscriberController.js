const Subscriber = require("../models/subscriber");
exports.getAllSuscribers = async (req, res, next) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json({ message: `${subscribers}` });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error retrieving suscribers", error: err });
  }
};

exports.createSubscriber = async (req, res, next) => {
  try {
    const newSub = new Subscriber({
      name: req.body.name,
      streamers: [],
    });
    console.log(req.body);
    await newSub.save();
    res.status(201).json({ message: `${newSub.name} saved successfully` });
  } catch (err) {
    res.status(400).json({ message: "Bad request", error: err.message });
  }
};

exports.getASuscriber = async (req, res) => {
  try {
    res.send(res.subscriber.name);
  } catch (err) {}
};
exports.updateASuscriber = async (req, res) => {
  if (req.body.name) {
    res.subscriber.name = req.body.name;
  }
  try {
    const updatedSub = await res.subscriber.save();
    res.status(200).json({ message: `New name: ${updatedSub.name}` });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error updating subscriber", error: err });
  }
};

exports.deleteSubscriber = async (req, res) => {
  try {
    let name = res.subscriber.name;
    await res.subscriber.deleteOne();
    res.status(200).json({ message: `${name} deleted succesfully` });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internals server error", error: err.message });
  }
};
exports.getSub = async (req, res, next) => {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null)
      return res.status(404).json({ message: "Subscriber does not exits" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Error retrieving subscriber", error: err });
  }
  res.subscriber = subscriber;
  next();
};
