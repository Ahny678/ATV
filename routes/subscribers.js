var express = require('express');
var router = express.Router();
const subscriberController = require('../controllers/suscriberController')
 
router.get('/all',subscriberController.getAllSuscribers);
router.post('/new', subscriberController.createSubscriber)
module.exports = router;