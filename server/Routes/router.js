const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const contactController = require('../controllers/contactController');

// Home page route
router.get('/', (req, res) => {
  res.render('home');
});

// About page route
router.get('/about', (req, res) => {
  res.render('about');
});

// Contact page routes
router.get('/contact', contactController.getContactPage);
router.post('/contact', contactController.submitContactForm);

// Products page route
router.get('/products', productController.getProducts);

module.exports = router;
