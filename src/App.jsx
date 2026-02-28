// react imports
import { useEffect, useState } from "react";

// component imports
import GameHeader from "./components/GameHeader";
import Card from "./components/Card";

// util imports
import gameCardItems from "./utils/gameCardItems";


function runIntialGameState(cardContentsArr, stateCallBack) {
  const itemsResult = Object.fromEntries(
    cardContentsArr.map((_value, index) => [
      index,
      {
        id: index,
        value: _value,
        isFlipped: false,
        isMatched: false,
      }
    ])
  );

  stateCallBack(itemsResult);
}


function App() {
  const [cardContState, setCardContState] = useState({});

  // run initial state
  useEffect(() => {
    runIntialGameState(gameCardItems, setCardContState);
  }, []);

  return (
    <div className="app">

      {/* game header section */}
      <GameHeader score={ 0 } moves={ 0 }/>

      {/* card grid section */}
      <div className="cards-grid">
        { cardContState.map((cardItem) => <Card cardContent={cardItem}/> ) }
      </div>

    </div>
  );
}

export default App;