import mongoose from "mongoose";
import ParkingSlot from "../models/ParkingSlot.model.js";
import sendError from "./sendError.js";

const validateSlotAvailability = async (req, res, next) => {
	const { parkingSlotId } = req.body;

	if (!parkingSlotId) {
		return sendError(res, 400, "parkingSlotId is required");
	}

	if (!mongoose.isValidObjectId(parkingSlotId)) {
		return sendError(res, 400, "parkingSlotId must be a valid ID");
	}

	try {
		const parkingSlot = await ParkingSlot.findById(parkingSlotId);

		if (!parkingSlot) {
			return sendError(res, 404, "Parking slot not found");
		}

		if (parkingSlot.status !== "available") {
			return sendError(res, 409, "Parking slot is not available");
		}

		next();
	} catch (error) {
		return sendError(res, 500, "Unable to validate parking slot availability");
	}
};

export default validateSlotAvailability;
