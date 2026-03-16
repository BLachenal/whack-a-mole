import { useGame } from "./gameContext";

export default function HomePage(){
    const {startGame, highScores} = useGame();
    const scoreList = [...highScores.sort((a, b) => b - a)]

    return (
    <div className="home-page">
      <h1 className="title">Whack-A-Mole</h1>
      <p>Welcome to Whack-A-Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>Can you beat the high score?</p>
      <button onClick={startGame}>Play</button>
      <h2>High Scores</h2>
      <div>{highScores.length === 0 ? "None yet. Play the game!" : 
      scoreList.map((score, index)=> (
        <div key = {index}>{score}</div>
      ))}</div>
    </div>
    );
}