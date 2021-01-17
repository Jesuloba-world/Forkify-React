import { useSelector, useDispatch } from "react-redux";

import classes from "./SearchResult.module.css";
import { recipe } from "../../../store/actions/index";

const SearchResult = (props) => {
	const limitRecipeTitle = (title, limit = 17) => {
		const newTitle = [];
		if (title.length > limit) {
			title.split(" ").reduce((acc, curr) => {
				if (acc + curr.length <= limit) {
					newTitle.push(curr);
				}
				return acc + curr.length;
			}, 0);

			// return the result
			return `${newTitle.join(" ")}...`;
		}
		return title;
	};

	const dispatch = useDispatch();
	const getRecipe = () => dispatch(recipe(props.result.recipe_id));

	const activeId = useSelector((state) => state.recipe.id);
	const currentId = props.result.recipe_id;

	let linkClasses = [classes.results__link];

	if (activeId === currentId) {
		linkClasses.push(classes.results__link__active);
	}

	return (
		<li>
			<a
				className={linkClasses.join(" ")}
				href={`#${props.result.recipe_id}`}
				onClick={getRecipe}
			>
				<figure className={classes.results__fig}>
					<img
						src={props.result.image_url}
						alt={props.result.title}
					/>
				</figure>
				<div className={classes.results__data}>
					<h4 className={classes.results__name}>
						{limitRecipeTitle(props.result.title)}
					</h4>
					<p className={classes.results__author}>
						{props.result.publisher}
					</p>
				</div>
			</a>
		</li>
	);
};

export default SearchResult;
