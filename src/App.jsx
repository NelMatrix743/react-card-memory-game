import { useState } from "react";

import GameHeader from "./components/GameHeader";
import Card from "./components/Card";

import gameCardItems from "./utils/gameCardItems";


function App() {
  return (
    <div className="app">

      {/* game header section */}
      <GameHeader score={ 0 } moves={ 0 }/>

      {/* card grid section */}
      <div className="cards-grid">
        { gameCardItems.map((cardItem) => <Card cardContent={cardItem}/> ) }
      </div>

    </div>
  );
}

export default App;