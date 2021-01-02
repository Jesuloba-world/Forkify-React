import classes from "./Spinner.module.css";

export const dotSpinner = (props) => (
	<div className={classes.dot}>
		<div className={classes.loader}></div>
	</div>
);
