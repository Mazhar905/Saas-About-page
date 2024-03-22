import { Col, Offcanvas, Row } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import MyNavbar from "../components/MyNavbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Menu } from "react-feather";
import { MenuItem } from "../assets/MenuItem";
import { useState } from "react";
import CButton from "../common/CButton";

function NavHeader() {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<>
			<Navbar expand="lg" className="align-items-center">
				<Navbar.Brand href="#">
					<img src="src/assets/logo.png" alt="logo" />
				</Navbar.Brand>
				<Menu className="d-block d-md-none" onClick={() => setShowMobileMenu(true)} />
				<Nav className="menuItem w-100 justify-content-end align-items-center d-md-flex d-none gap-5">
					{MenuItem.map((x) => {
						return (
							<Nav.Link style={{ fontWeight: "500" }} key={x.id} href={x.path}>
								{x.name}
							</Nav.Link>
						);
					})}
					<CButton color={"white"} bgColor={"green"}>
						Get Started
					</CButton>
				</Nav>
			</Navbar>
			<Offcanvas show={showMobileMenu} onHide={() => setShowMobileMenu(false)}>
				<Offcanvas.Header closeButton></Offcanvas.Header>
				<Nav className=" menuItem d-flex flex-column px-5 gap-3">
					{MenuItem.map((x) => {
						return (
							<Nav.Link key={x.id} href={x.path}>
								{x.name}
							</Nav.Link>
						);
					})}
					<CButton color={"white"} bgColor={"green"}>
						Get Started
					</CButton>
				</Nav>
			</Offcanvas>
		</>
	);
}

export default NavHeader;
