var express = require('express');
var router = express.Router();
const subscriberController = require('../controllers/suscriberController')
 
router.get('/all',subscriberController.getAllSuscribers);
router.post('/new', subscriberController.createSubscriber);
router.get('/:id',subscriberController.getSub, subscriberController.getASuscriber);
router.patch('/:id',subscriberController.getSub, subscriberController.updateASuscriber);
router.delete('/:id',subscriberController.getSub, subscriberController.deleteASuscriber);
module.exports = router;