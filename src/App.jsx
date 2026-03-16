import { useGame } from "./gameContext";
import GameScreen from "./game/game";
import HomePage from "./homepage";


export default function App() {
  const { playGame } = useGame();

  if(!playGame){
    return (<HomePage />);
  }else{
    return(
      <div>
        <GameScreen />
      </div>
   );
  }
}


//for use later window.open("https://youtu.be/dQw4w9WgXcQ?si=1deqwQXLe8xdRlqI") <Game></Game>