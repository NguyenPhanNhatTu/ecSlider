const express = require('express');
const router = express.Router();

const imageController = require('../app/Controllers/ImageController');
router.post('/store',imageController.store);
router.get('/', imageController.index);

module.exports = router;
