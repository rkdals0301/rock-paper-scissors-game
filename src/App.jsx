import { useState } from "react";
import "./App.scss";
import iconResetImage from "./assets/ic-reset.svg";
import HandButton from "./components/hand-button/HandButton";
import Score from "./components/score/Score";
import Hand from "./components/hand/Hand";
import { compareHand, generateRandomHand } from "./utils/Utils";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
    const comparison = compareHand(me, other);
    if (comparison > 0) return "승리";
    if (comparison < 0) return "패배";
    return "무승부";
}

function App() {
    const [hand, setHand] = useState(INITIAL_VALUE);
    const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
    const [gameHistory, setGameHistory] = useState([]);
    const [score, setScore] = useState(0);
    const [otherScore, setOtherScore] = useState(0);
    const [bet, setBet] = useState(1);

    const handleButtonClick = (nextHand) => {
        const nextOtherHand = generateRandomHand();
        const nextHistoryItem = getResult(nextHand, nextOtherHand);
        const comparison = compareHand(nextHand, nextOtherHand);
        setHand(nextHand);
        setOtherHand(nextOtherHand);
        setGameHistory([...gameHistory, nextHistoryItem]);
        if (comparison > 0) setScore(score + bet);
        if (comparison < 0) setOtherScore(otherScore + bet);
    };

    const handleClearClick = () => {
        setHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        setGameHistory([]);
        setScore(0);
        setOtherScore(0);
        setBet(1);
    };

    const handleBetChange = (e) => {
        let num = Number(e.target.value);
        if (num > 9) num %= 10;
        if (num < 1) num = 1;
        num = Math.floor(num);
        setBet(num);
    };

    return (
        <div className="app">
            <h1 className="app-heading">가위 바위 보!</h1>
            <img
                className="app-reset"
                onClick={handleClearClick}
                src={iconResetImage}
                alt="초기화"
            />
            <div className="app-scores">
                <Score name="나" num={score} />
                <div className="app-versus">:</div>
                <Score name="상대" num={otherScore} />
            </div>
            <div className="box app-box">
                <div className="box-inner">
                    <div className="app-hands">
                        <Hand
                            imageName={hand}
                            className={
                                gameHistory[gameHistory.length - 1] === "승리"
                                    ? "winner"
                                    : ""
                            }
                        />
                        <div className="app-versus">VS</div>
                        <Hand
                            imageName={otherHand}
                            className={
                                gameHistory[gameHistory.length - 1] === "패배"
                                    ? "winner"
                                    : ""
                            }
                        />
                    </div>
                    <div className="app-bet">
                        <span>배점</span>
                        <input
                            type="number"
                            min={1}
                            max={9}
                            onChange={handleBetChange}
                            value={bet}
                        />
                        <span>배</span>
                    </div>
                    <div className="app-history">
                        <h2>승부기록</h2>
                        <p>{gameHistory.join(", ")}</p>
                    </div>
                </div>
            </div>
            <HandButton imageName="rock" onClick={handleButtonClick} />
            <HandButton imageName="scissor" onClick={handleButtonClick} />
            <HandButton imageName="paper" onClick={handleButtonClick} />
        </div>
    );
}

export default App;
