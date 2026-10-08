const express = require("express");
const router = express.Router();
const { createReservationController, getReservationsController, cancelReservationController } = require("../controllers/reservationController");

router.post("/", createReservationController);
router.get("/", getReservationsController);
router.patch("/:id/cancel", cancelReservationController);

module.exports = router;
