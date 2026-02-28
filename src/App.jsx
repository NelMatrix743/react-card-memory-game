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

function handleCardClick(_cardContent){
  if(_cardContent.isFlipped || _cardContent.isMatched)
    return;

  const cardID = _cardContent.id;

  // set card state, and maintain the state of other cards
  setCardContState(prev => ({
    ...prev,
    [cardID]: {
      ...prev[cardID],
      isFlipped: true
    }
  }));
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
        {Object.entries(cardContState).map(([key, cardItem]) => (
          <Card key={key} cardContent={cardItem} handleCallBack={handleCardClick} />
        ))}
      </div>

    </div>
  );
}

export default App;