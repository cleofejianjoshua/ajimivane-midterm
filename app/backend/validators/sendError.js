const sendError = (res, statusCode, message) => {
	return res.status(statusCode).json({
		success: false,
		message,
	});
};

export default sendError;