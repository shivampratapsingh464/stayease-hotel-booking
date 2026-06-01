const Booking = require("../models/Booking");

const createBooking = async (req, res) => {

  try {

    const booking =
      await Booking.create(req.body);

    console.log("Booking Saved");

    res.status(201).json(booking);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

const getBookings = async (req, res) => {

  try {

    const bookings =
      await Booking.find();

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

const cancelBooking = async (req, res) => {

  try {

    await Booking.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Booking Cancelled",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createBooking,
  getBookings,
  cancelBooking,
};