const express = require('express');
const {getData, postData, updateData, deleteData} = require('../controller/productController');

const router = express.Router();

router.get('/get-data', getData);
router.post('/post-data', postData);
router.put('/update-data/:id', updateData);
router.put('/delete-data/:id', deleteData);


module.exports = router;