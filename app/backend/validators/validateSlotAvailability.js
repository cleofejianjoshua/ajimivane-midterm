import mongoose from "mongoose";
import ParkingSlot from "../models/ParkingSlot.model.js";

const validateSlotAvailability = async (req, res, next) => {
	const { parkingSlotId } = req.body;

	if (!parkingSlotId) {
		return res.status(400).json({
			message: "parkingSlotId is required",
		});
	}

	if (!mongoose.isValidObjectId(parkingSlotId)) {
		return res.status(400).json({
			message: "parkingSlotId must be a valid ID",
		});
	}

	try {
		const parkingSlot = await ParkingSlot.findById(parkingSlotId);

		if (!parkingSlot) {
			return res.status(404).json({
				message: "Parking slot not found",
			});
		}

		if (parkingSlot.status !== "available") {
			return res.status(409).json({
				message: "Parking slot is not available",
			});
		}

		next();
	} catch (error) {
		return res.status(500).json({
			message: "Unable to validate parking slot availability",
		});
	}
};

export default validateSlotAvailability;
