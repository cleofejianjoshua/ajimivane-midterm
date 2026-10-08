const validateReservationDates = (req, res, next) => {
	const { startTime, endTime } = req.body;

	if (!startTime || !endTime) {
		return res.status(400).json({
			message: "startTime and endTime are required",
		});
	}

	const startDate = new Date(startTime);
	const endDate = new Date(endTime);

	if (Number.isNaN(startDate.getTime()) || Number.isNaN(endDate.getTime())) {
		return res.status(400).json({
			message: "startTime and endTime must be valid dates",
		});
	}

	if (startDate >= endDate) {
		return res.status(400).json({
			message: "endTime must be later than startTime",
		});
	}

	next();
};

export default validateReservationDates;
