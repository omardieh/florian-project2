const express = require("express");
const router = express.Router();

const { User, Property, Booking, Review } = require("../models");

router.get("/bookings", async (req, res) => {
  // Get all bookings
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/bookings/:bookingId", async (req, res) => {
  // Get a specific booking by ID
  try {
    const booking = await Booking.findById(req.params.bookingId);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;