const express =
require("express");

const router =
express.Router();

const {

  createRoom,
  getRooms,
  updateRoom,
  deleteRoom,

} = require(
  "../controllers/roomController"
);

router.get(
  "/",
  getRooms
);

router.post(
  "/",
  createRoom
);

router.put(
  "/:id",
  updateRoom
);

router.delete(
  "/:id",
  deleteRoom
);

module.exports = router;