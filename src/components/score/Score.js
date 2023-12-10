import "./Score.scss";

function Score({ num, name }) {
	return (
		<div className="score">
			<div className="score-num">{num}</div>
			<div className="score-name">{name}</div>
		</div>
	);
}

export default Score;
