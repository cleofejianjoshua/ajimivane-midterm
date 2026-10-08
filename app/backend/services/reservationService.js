const Reservation = require("../models/reservationModel");

const createReservation = async (reservationData) => {
  const reservation = new Reservation(reservationData);
  return await reservation.save();
};

const getReservations = async () => {
  return await Reservation.find();
};

module.exports = { createReservation, getReservations };
