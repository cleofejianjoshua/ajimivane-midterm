const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    parkingSlotId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ParkingSlot",
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "active", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
