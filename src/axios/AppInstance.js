import axios from "axios";

const TS_AUTH_ENDPOINT = axios.create({
	baseURL: "https://coreapi.hectorai.live/api",
	timeout: 15000,
	headers: {
		"Content-Type": "application/json",
	},
});

export { TS_AUTH_ENDPOINT };
