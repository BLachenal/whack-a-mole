
export default function homePage(){
while(!playGame){
    return (
    <div className="home-page">
      <h1>Whack-A-Mole</h1>
      <p>Welcome to Whack-A-Mole!</p>
      <p>Whack a mole to earn points.</p>
      <p>Can you beat the high score?</p>
      <button onClick={()=>setPlayGame((current) => !current )}>Play</button>
      <h2>High Scores</h2>
      <p>None yet. Play the game! conditionally show highest score.</p>
    </div>
    );
  }

  return(
    
    <div>
      <p>Play the game you goof :) {console.log("something")}</p> 
    
    </div>
  );
}