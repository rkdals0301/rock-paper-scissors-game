import "./HandButton.scss";

function HandButton({ imageName, onClick }) {
	const image = require(`../../assets/${imageName}.svg`);
	const handleClick = () => onClick(imageName);

	return (
		<button className="button" onClick={handleClick}>
			<img className="button-icon" src={image} alt={imageName} />
		</button>
	);
}

export default HandButton;
