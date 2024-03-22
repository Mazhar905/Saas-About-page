import React from "react";
import { Card } from "antd";
import { Row } from "react-bootstrap";
import { Eye } from "react-feather";
const { Meta } = Card;
const cardData = [
	{
		id: 1,
		icon: <Eye size={48} />,
		name: "High Resoulation",
		descp: "Say goodbye to complicated spreadsheets and manual calculations. With our app, budgeting becomes a breeze. Set up your budget categories",
	},
	{
		id: 2,
		icon: <Eye size={48} />,
		name: "High Resoulation",
		descp: "Say goodbye to complicated spreadsheets and manual calculations. With our app, budgeting becomes a breeze. Set up your budget categories",
	},
	{
		id: 3,
		icon: <Eye size={48} />,
		name: "High Resoulation",
		descp: "Say goodbye to complicated spreadsheets and manual calculations. With our app, budgeting becomes a breeze. Set up your budget categories",
	},
];
const FeatureCard = () => (
	<>
		<Row id="features" className="cardlayout text-center gap-4">
			<h6>Key Features</h6>
			<h2>SaaS Made Simple: Drive efficiency and boost performance</h2>
			{cardData.map((x) => {
				return (
					<Card
						style={{
							width: "30%",
							padding: "40px 20px 20px",
						}}
						key={x.id}
						cover={x.icon}
					>
						<Meta title={x.name} description={x.descp} />
					</Card>
				);
			})}
		</Row>
	</>
);
export default FeatureCard;
