const authenticateUser = (req, res, next) => {
	const authorizationHeader = req.headers.authorization;
	const [scheme, encodedCredentials] = authorizationHeader?.split(" ") ?? [];

	if (scheme !== "Basic" || !encodedCredentials) {
		res.set("WWW-Authenticate", "Basic realm=\"reservations\"");
		return res.status(401).json({
			message: "Username and password are required",
		});
	}

	const decodedCredentials = Buffer.from(encodedCredentials, "base64").toString("utf8");
	const separatorIndex = decodedCredentials.indexOf(":");
	const username = decodedCredentials.slice(0, separatorIndex);
	const password = decodedCredentials.slice(separatorIndex + 1);

	if (
		separatorIndex === -1 ||
		!process.env.AUTH_USERNAME ||
		!process.env.AUTH_PASSWORD ||
		username !== process.env.AUTH_USERNAME ||
		password !== process.env.AUTH_PASSWORD
	) {
		res.set("WWW-Authenticate", "Basic realm=\"reservations\"");
		return res.status(401).json({
			message: "Invalid username or password",
		});
	}

	req.user = { username };
	next();
};

export { authenticateUser };
export default authenticateUser;