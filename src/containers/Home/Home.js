import Background from "../../layout/background/background";
import Search from "../../components/Search/Search";

const home = (props) => {
	return (
		<Background>
			<Search
				typed={props.search}
				type={props.type}
				search={props.clicked}
			/>
		</Background>
	);
};

export default home;
