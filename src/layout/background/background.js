import classes from "./background.module.css";

const background = (props) => {
	return <div className={classes.Background}>{props.children}</div>;
};

export default background;
