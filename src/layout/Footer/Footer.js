import classes from "./Footer.module.css";

const footer = (props) => {
	return (
		<div className={classes.Footer}>
			&copy; by Jesuloba John, Powered by{" "}
			<a href="forkify-api.herokuapp.com">Forkify-api.com</a>
		</div>
	);
};

export default footer;
