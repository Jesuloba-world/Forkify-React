import { Fragment, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../../components/Logo/Logo";
import Search from "../../components/Search/Search";
import * as actions from "../../store/actions/index";

const Home = (props) => {
	const searched = useSelector((state) => state.search.searched);

	const dispatch = useDispatch();

	const searchReset = () => dispatch(actions.searchReset());

	searchReset();

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

export default memo(Home);
