import "./Hand.scss";

function Hand({ imageName, className }) {
	const image = new URL(`../../assets/${imageName}.svg`, import.meta.url).href;

	return (
		<div className={`hand ${className}`}>
			<img className="hand-icon" src={image} alt="rock" />
		</div>
	);
}

export default Hand;
