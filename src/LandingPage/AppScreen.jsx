import React from "react";
import { Carousel } from "antd";
import { Col, Row } from "react-bootstrap";

const AppScreen = () => (
	<Row className="appScreens justify-content-center text-center gap-4">
		<Col className="col-6">
			<h6>App Screens</h6>
			<h2>A great SaaS App is the ability to customize your workflow</h2>
		</Col>
		<Col className=" justify-content-center align-items-center m-auto">
			<Carousel className="m-auto">
				<div>
					<img src="public/screen1.png" alt="" srcset="" />
				</div>
				<div>
					<img src="public/screen3.png" alt="" srcset="" />
				</div>
				<div>
					<img src="public/screen1.png" alt="" srcset="" />
				</div>
				<div>
					<img src="public/screen1.png" alt="" srcset="" />
				</div>
			</Carousel>
		</Col>
	</Row>
);
export default AppScreen;
