import { useGame } from "../gameContext";
export default function GameScreen(){
    
    const { restart, currentScore, holes, moleHole, whackMole } = useGame();
    
    
    return (
        <>
        <div className="game-container">
            <h2>Play the Game</h2>
            <p>Score: {currentScore}</p>
            <button onClick={restart}>Reset</button>
            <div className="mole-holes">
                {holes.map((index) => (
                    <div key={index}>
                        {index === moleHole ? (
                            <img src="/mole.png" alt="Mole" className="whack-mole"
                            onClick={whackMole}/>) : (
                            <img src="/hole.png" alt="Hole"/>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </>

    );
}

