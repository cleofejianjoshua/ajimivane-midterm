import sendError from "./sendError.js";

const validateReservationDates = (req, res, next) => {
	const { startTime, endTime } = req.body;

	if (!startTime || !endTime) {
		return sendError(res, 400, "startTime and endTime are required");
	}

	const startDate = new Date(startTime);
	const endDate = new Date(endTime);

	if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
		return sendError(res, 400, "startTime and endTime must be valid dates");
	}

	if (startDate >= endDate) {
		return sendError(res, 400, "endTime must be later than startTime");
	}

	next();
};

export default validateReservationDates;
