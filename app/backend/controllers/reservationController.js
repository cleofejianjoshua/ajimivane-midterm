const { createReservation, getReservations, cancelReservation } = require("../services/reservationService");

const createReservationController = async (req, res) => {
  const { userId, parkingSlotId, startTime, endTime } = req.body;

  const reservation = await createReservation({
    userId,
    parkingSlotId,
    startTime,
    endTime,
  });

  return res.status(201).json({
    message: "Reservation created successfully",
    data: reservation,
  });
};

const getReservationsController = async (req, res) => {
  const reservations = await getReservations();

  return res.status(200).json({
    message: "Reservations retrieved successfully",
    data: reservations,
  });
};

const cancelReservationController = async (req, res) => {
  const { id } = req.params;

  const reservation = await cancelReservation(id);

  return res.status(200).json({
    message: "Reservation cancelled successfully",
    data: reservation,
  });
};

module.exports = { createReservationController, getReservationsController, cancelReservationController };
