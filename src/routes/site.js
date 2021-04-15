const express = require('express');
const router = express.Router();

const imageController = require('../app/Controllers/ImageController');
// router.post('/store',imageController.store);
router.use('/', imageController.index);

module.exports = router;
