import React from "react";
import { Layout,} from "antd";
import NavHeader from "./LandingPage/Header";
import Hero from "./LandingPage/Hero";
import PricingTable from "./LandingPage/PricingTable";
import AppScreen from "./LandingPage/AppScreen";
import FeatureCards from "./LandingPage/FeatureCard";
import TabsContents from "./LandingPage/TabsConten";
const { Header, Content, Footer } = Layout;

const App = () => {
	return (
		<>
			<Layout id="#home" style={{ backgroundColor: "transparent" }}>
				<Header style={{ backgroundColor: "transparent", height: "100px" }}>
					<NavHeader />
				</Header>
				<Content className="justify-content-center">
					<Hero />
					<FeatureCards />
					<TabsContents />
					<AppScreen />
					<PricingTable />
				</Content>
				<Footer
					style={{
						textAlign: "center",
					}}
				>
					Ant Design ©{new Date().getFullYear()} Created by Ant UED
				</Footer>
			</Layout>
		</>
	);
};
export default App;
