import { Col, Row } from "react-bootstrap";

import React, { useEffect, useState } from "react";
import { Avatar, List, Radio, Space } from "antd";
import CButton from "../common/CButton";
import { Check } from "react-feather";

const plans = ["Montly", "Yearly"];
const monthPrice = [9.99, 14.99];
const yearPrice = [19.99, 29.99];
// export default PlanSelect;
const PricingTable = () => {
	const [plan, setPlan] = useState("Montly");
	const tableData = [
		{
			name: "Basic",
			descp: "Core task management features for single users",
			price: "Always Free",
			term: plan,
			target: "/",
			features: ["Up to 3 projects", "Unlimited project members", "Customizable project boards", "Community support", "Multiple team members"],
		},
		{
			name: "Pro",
			descp: "Core task management features for single users",
			price: plan === "Montly" ? monthPrice[0] : yearPrice[0], // i is not defined here
			term: plan,
			target: "/",
			features: [
				"Up to 3 projects",
				"Unlimited project members",
				"Customizable project boards",
				"Community support",
				"Multiple team members",
				"Private projects",
				"Statistics and reports",
				"Priority email & phone support",
			],
		},
		{
			name: "Business",
			descp: "Core task management features for single users",
			term: plan,
			price: plan === "Montly" ? monthPrice[1] : yearPrice[1],
			target: "/",
			features: ["Up to 3 projects", "Unlimited project members", "Customizable project boards", "Community support", "Multiple team members"],
		},
	];

	return (
		<>
			<Row id="pricingTable" className="justify-content-center gap-4">
				<Row className="text-center">
					<h6>Pricing Table</h6>
					<h2>What does your team need? Choose your Taran plan.</h2>
				</Row>
				<Space
					direction="vertical"
					className="text-center"
					style={{
						marginBottom: "20px",
					}}
					size="middle"
				>
					<Space>
						<Radio.Group
							className="planButton"
							optionType="button"
							value={plan}
							onChange={(e) => {
								setPlan(e.target.value);
							}}
						>
							{plans.map((item) => (
								<Radio.Button key={item} value={item}>
									{item}
								</Radio.Button>
							))}
						</Radio.Group>
					</Space>
				</Space>
				<Row className="justify-content-center align-items-center gap-5">
					{tableData.map((x) => {
						return (
							<Col className="d-flex flex-column tableContent col gap-3" key={x.name}>
								<Row>
									<h3 className="text-start">{x.name}</h3>
									<p>{x.descp}</p>
								</Row>
								<Row>
									{x.name === "Basic" ? (
										<h2>{x.price}</h2>
									) : (
										<h2>
											${x.price}
											<span style={{ fontSize: "16px" }}>/{x.term}</span>
										</h2>
									)}
									<CButton color={"rgb(10, 101, 252)"} bgColor={"transparent"} width={"100"}>
										<a href={x.path}> Get Started</a>
									</CButton>
								</Row>
								<Row>
									<p>
										<b>Task management with:</b>
									</p>
									<ul>
										{x.features.map((i) => {
											return (
												<li key={i}>
													<Check />
													{i}
												</li>
											);
										})}
									</ul>
								</Row>
							</Col>
						);
					})}
				</Row>
			</Row>
		</>
	);
};

export default PricingTable;
