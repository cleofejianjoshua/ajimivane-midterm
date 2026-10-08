const { createReservation, getReservations } = require("../services/reservationService");

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

module.exports = { createReservationController, getReservationsController };
