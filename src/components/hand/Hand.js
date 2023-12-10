import "./Hand.scss";

function Hand({ imageName, className }) {
	const image = require(`../../assets/${imageName}.svg`);

	return (
		<div className={`hand ${className}`}>
			<img className="hand-icon" src={image} alt="rock" />
		</div>
	);
}

export default Hand;
