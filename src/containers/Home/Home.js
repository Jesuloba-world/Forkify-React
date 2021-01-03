import { Fragment } from "react";
import { useSelector } from "react-redux";

import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";

const Home = (props) => {
	const searched = useSelector((state) => state.search.searched);

	if (searched) {
		props.history.push("/search");
	}

	return (
		<Fragment>
			<div
				style={{
					height: "12vw",
				}}
			>
				<Logo />
			</div>
			<Search />
		</Fragment>
	);
};

export default Home;
