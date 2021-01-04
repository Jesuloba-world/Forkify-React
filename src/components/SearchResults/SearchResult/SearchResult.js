const SearchResult = (props) => {
	const limitRecipeTitle = (title) => {
		return title;
	};

	return (
		<li>
			<a className="results__link" href={`#${props.result.recipe_id}`}>
				<figure className="results__fig">
					<img
						src={props.result.image_url}
						alt={props.result.title}
					/>
				</figure>
				<div className="results__data">
					<h4 className="results__name">
						{limitRecipeTitle(props.result.title)}
					</h4>
					<p className="results__author">{props.result.publisher}</p>
				</div>
			</a>
		</li>
	);
};
export default SearchResult;
