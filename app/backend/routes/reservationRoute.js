const express = require("express");
const router = express.Router();
const { createReservationController, getReservationsController } = require("../controllers/reservationController");

router.post("/", createReservationController);
router.get("/", getReservationsController);

module.exports = router;
