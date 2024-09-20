// api/routes/products.js
const express = require('express');
const router = express.Router();

// Example route to get all products
router.get('/', (req, res) => {
  res.json({ message: 'Get all products' });
});

module.exports = router;
 
