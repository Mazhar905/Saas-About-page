import { MenuItem } from "../assets/MenuItem";

const MyNavbar = () => {
	return (
		<>
			<ul className="navbar justify-content-between align-items-center">
				{MenuItem.map((x) => {
					return (
						<li key={x.id}>
							<a href={x.path}>{x.name}</a>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default MyNavbar;
