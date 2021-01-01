import { Fragment } from "react";

import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";

const Home = (props) => {
	return (
		<Fragment>
			<div
				style={{
					height: "15rem",
				}}
			>
				<Logo />
			</div>
			<Search />
		</Fragment>
	);
};

export default Home;
