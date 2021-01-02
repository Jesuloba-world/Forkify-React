import { Fragment } from "react";
import { useSelector } from "react-redux";

import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";
import { dotSpinner as Dot } from "../../components/UI/Spinner/Spinner";

const Home = (props) => {
	const searched = useSelector((state) => state.search.searched);
	const searching = useSelector((state) => state.search.searching);

	if (searched) {
		props.history.push("/search");
	}

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
			{searching ? <Dot /> : null}
		</Fragment>
	);
};

export default Home;
