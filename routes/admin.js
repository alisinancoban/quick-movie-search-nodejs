const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

// /admin/add-movie => POST
router.post('/add-movie', adminController.postAddMovie);
router.get('/favorites', adminController.getMovies);

module.exports = router;
