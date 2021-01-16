import classes from "./SearchResult.module.css";

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

	return (
		<li>
			<a
				className={classes.results__link}
				href={`#${props.result.recipe_id}`}
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
