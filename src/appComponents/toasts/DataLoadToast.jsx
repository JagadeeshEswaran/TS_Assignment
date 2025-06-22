import React from "react";
import { Toast } from "react-bootstrap";

const DataLoadToast = ({ message }) => {
	return (
		<Toast className="d-inline-block m-1 position-absolute top-0 mt-4">
			<Toast.Body className={"text-dark"}>{message}</Toast.Body>
		</Toast>
	);
};

export default DataLoadToast;
