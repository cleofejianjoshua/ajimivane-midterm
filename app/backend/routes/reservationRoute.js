const express = require("express");
const router = express.Router();
const { createReservationController } = require("../controllers/reservationController");

router.post("/", createReservationController);

module.exports = router;
