import { Image } from "antd";
import { Col, Row } from "react-bootstrap";
import CButton from "../common/CButton";

const Hero = () => {
	return (
		<>
			<Row className="heroSection d-md-flex d-block" >
				<Col className="col-md-4 align-item-center d-flex flex-column px-2 gap-4">
					<h1>Simplify, Automate, and Thrive with our Intuitive SaaS App</h1>
					<p>Say goodbye to manual workarounds and hello to productivity with our cutting-edge SaaS App. Designed to revolutionize your workflow</p>
					<CButton>
						<a href="http://">Start Free Trial</a>
					</CButton>
				</Col>
				<Col className="col-md-8">
					<img src="public/hero-app.0f1a3f1d.png" alt="" />
				</Col>
				<img className="position-absolute w-100" style={{bottom:"0", left:"0"}} width="1920" src="public/banner-vector.ccc81690.png" />
			</Row>
		</>
	);
};

export default Hero;
