import { useState } from "react";
import "./App.css";

const phrases = [
  "NO",
  "ARE YOU SURE?",
  "PLS DUDE :(",
  "You know you want to",
  "Please :)",
  "I'm going to cry",
  "Ok, I get it, you dont like mwe :(",
  "Imma be single forever",

]
function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 +16;

  function handleNoClick(){
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }
  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
        <img
          src="https://pin.it/51poFbjVq.gif"
          alt="Bears Kissing"
          />
          <div className="text"> Yay!!!</div>
          </>
      ) : ( 
        <>
        
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F6936460-cute-bear-with-coffee-cup-cartoon-vector-illustration&psig=AOvVaw2xpIlwgzGJll1G3ZLub6GD&ust=1707095127274000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIi-1oe_kIQDFQAAAAAdAAAAABAD"
          />
        

          <div> Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize}}
              onClick={() => setYesPressed(true)}
              >
                Yes
              </button>
              <button onClick={handleNoClick} className="noButton">
                {getNoButtonText()}
              </button>
          </div>
          </>
      )}
      </div>

  );
}

export default App;
