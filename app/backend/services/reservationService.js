const Reservation = require("../models/reservationModel");

const createReservation = async (reservationData) => {
  const reservation = new Reservation(reservationData);
  return await reservation.save();
};

module.exports = { createReservation };
