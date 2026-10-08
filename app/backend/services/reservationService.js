const Reservation = require("../models/reservationModel");

const isSlotTaken = async (parkingSlotId) => {
  const existing = await Reservation.findOne({
    parkingSlotId,
    status: { $in: ["pending", "active"] },
  });
  return !!existing;
};

const createReservation = async (reservationData) => {
  const slotTaken = await isSlotTaken(reservationData.parkingSlotId);
  if (slotTaken) return null;

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
