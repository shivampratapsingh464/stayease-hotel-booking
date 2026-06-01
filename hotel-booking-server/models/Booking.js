const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    checkIn: {
      type: String,
      required: true,
    },

    checkOut: {
      type: String,
      required: true,
    },

    guests: {
      type: Number,
      required: true,
    },

    room: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);