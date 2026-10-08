const { createReservation } = require("../services/reservationService");

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

module.exports = { createReservationController };
