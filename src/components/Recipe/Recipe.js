import { useSelector } from "react-redux";
import classes from "./Recipe.module.css";
import Glass from "../UI/Glass/Glass";
import Spinner from "../UI/Spinner/Spinner";

const Recipe = (props) => {
	const recipe = useSelector((state) => state.recipe.result);
	const loading = useSelector((state) => state.recipe.loading);
	const recipeError = useSelector((state) => state.recipe.error);
	const searched = useSelector((state) => !!state.search.result);

	let output = null;

	if (!recipe) {
		if (loading) {
			output = <Spinner />;
		} else {
			if (recipeError) {
				output = (
					<div className={classes.error}>
						<h2 className="error">There was an error</h2>
						<p>{recipeError}</p>
					</div>
				);
			} else {
				if (searched) {
					output = (
						<div>
							<h2>Click on something</h2>
						</div>
					);
				} else {
					output = null;
				}
			}
		}
	} else {
		// output = ()
	}

	return <Glass>{output}</Glass>;
};

export default Recipe;
