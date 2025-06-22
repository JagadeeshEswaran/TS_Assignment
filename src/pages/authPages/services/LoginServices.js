import { TS_AUTH_ENDPOINT } from "../../../axios/AppInstance";

export const handleFormSubmit = async (
	e,
	setData,
	setShowToast,
	setSessionValidity,
	setLoading,
	setToastMessage,
	data,
	toastVariant,
	setToastVariant,
	navigate
) => {
	e.preventDefault();
	setLoading(true);

	try {
		const response = await TS_AUTH_ENDPOINT.post("/auth/login", data);

		if (response.data.success) {
			setToastMessage("Login Success !!");
			const authToken = response.data.token;
			sessionStorage.setItem("authToken", JSON.stringify(authToken));

			const userDetails = response.data.userDetails;
			sessionStorage.setItem("userDetails", JSON.stringify(userDetails));

			setSessionValidity(true);
			setData({
				email: "",
				password: "",
			});
			setShowToast(true);
			setToastVariant("success");

			navigate("/dashboard");
		} else {
			setShowToast(true);
			setToastMessage("Login Failed !!");
			setToastVariant("failed");
		}
	} catch (error) {
		console.log(error);

		setShowToast(true);
		setToastMessage(
			(error.response.status === 401
				? "Semething went wrong !!"
				: error.response.data.message) || "Login Failed !!"
		);
		setToastVariant("failed");
	} finally {
		setLoading(false);
	}
};
