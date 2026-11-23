import "./HandButton.scss";

function HandButton({ imageName, onClick }) {
	const image = new URL(`../../assets/${imageName}.svg`, import.meta.url).href;
	const handleClick = () => onClick(imageName);

	return (
		<button className="button" onClick={handleClick}>
			<img className="button-icon" src={image} alt={imageName} />
		</button>
	);
}

export default HandButton;
