import sendError from "./sendError.js";

const errorHandler = (error, req, res, next) => {
	if (res.headersSent) {
		return next(error);
	}

	const statusCode = error.statusCode ?? error.status;
	const isClientError = error.name === "ValidationError" || error.name === "CastError";
	const responseStatus = Number.isInteger(statusCode)
		? statusCode
		: isClientError
			? 400
			: 500;

	return sendError(
		res,
		responseStatus,
		responseStatus >= 500 ? "Internal server error" : error.message,
	);
};

export { errorHandler };
export default errorHandler;