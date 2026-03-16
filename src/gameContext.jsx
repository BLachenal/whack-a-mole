import { useContext, createContext, useState } from "react";

const GameContext = createContext();

const NUM_HOLES = 9;

export const gameProvider =({children})=>{
    const [playGame, setPlayGame] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);
    const [moleHole, setMoleHole] = useState();

    const holes = Array.from({length: NUM_HOLES}, (_, i) => i);

    const startGame = () => {
        setCurrentScore(0);
        setPlayGame(true);
        randomMole();
    }
   
    const randomMole = () => {
        const nextHole = math.floor(math.random() * NUM_HOLES);
        setMoleHole(nextHole);
    }

    const whackMole = () =>{
        setCurrentScore(score => score + 1);
        randomMole();
    }


    const restart = () =>{
        setPlayGame(false);
        setCurrentScore(0);
    }

    return (
        <GameContext value = {{
            playGame, 
            currentScore, 
            moleHole, 
            holes, 
            startGame, 
            whackMole, 
            restart}}>

                {children}
        </GameContext>
    );
}

export const useGame = () => {
    const gameContext = useContext(GameContext)

    return gameContext;
}