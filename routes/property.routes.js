const express = require('express');
const router = express.Router();

const { User, Property, Booking, Review } = require('../models');



router.get('/properties', async (req, res) => {
    // Get all properties
    try {
      const properties = await Property.find();
      res.json(properties);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  router.get('/properties/:propertyId', async (req, res) => {
    // Get a specific property by ID
    try {
      const property = await Property.findById(req.params.propertyId);
      if (!property) {
        return res.status(404).json({ error: 'Property not found' });
      }
      res.json(property);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });


  module.exports = router;