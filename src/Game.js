import React from 'react';

function Game({ country, difficulty }){
   
       return (
    <div>
      <h1>Game Started</h1>
      <p>Country: {country}</p>
      <p>Difficulty: {difficulty}</p>
      {/* Your game logic here */}
    </div>
        ) ;
   
}
export default Game;