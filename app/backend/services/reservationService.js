const Reservation = require("../models/reservationModel");

const createReservation = async (reservationData) => {
  const reservation = new Reservation(reservationData);
  return await reservation.save();
};

const getReservations = async () => {
  return await Reservation.find();
};

const cancelReservation = async (id) => {
  return await Reservation.findByIdAndUpdate(
    id,
    { status: "cancelled" },
    { new: true }
  );
};

module.exports = { createReservation, getReservations, cancelReservation };
