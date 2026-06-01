const Room = require("../models/Room");

const createRoom = async (req, res) => {

  try {

    const room = await Room.create(
      req.body
    );

    res.status(201).json(room);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

const getRooms = async (req, res) => {

  try {

    const rooms = await Room.find();

    res.json(rooms);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

const updateRoom = async (
  req,
  res
) => {

  try {

    const room =
      await Room.findByIdAndUpdate(

        req.params.id,

        req.body,

        {
          new: true,
        }
      );

    res.json(room);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

const deleteRoom = async (
  req,
  res
) => {

  try {

    await Room.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Room Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {

  createRoom,
  getRooms,
  updateRoom,
  deleteRoom,
};