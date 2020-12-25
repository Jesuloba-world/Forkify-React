import classes from "./Footer.module.css";

const footer = (props) => {
	return (
		<div className={classes.Footer}>
			<p>
				&copy; by Jesuloba John, Powered by{" "}
				<a className={classes.link} href="forkify-api.herokuapp.com">
					Forkify-api.com
				</a>
			</p>
		</div>
	);
};

export default footer;
