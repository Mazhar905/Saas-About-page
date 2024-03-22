import React from "react";
import { Button } from "react-bootstrap";

const CButton = ({ color, bgColor, width, children, onClick }) => {
	return (
		<Button
	
			style={{ color: color ? color : "white", backgroundColor: bgColor ? bgColor : "#0a65fc", width: width ? width : "fit-content", padding: "15px 30px" ,fontWeight: "500"}}
			onClick={onClick}
		>
			{children}
		</Button>
	);
};

export default CButton;
