import React from 'react';
import CardNumber from './CardNumber/CardNumber';
import './App.css';
import CardDigit from './CardDigit/CardDigit';

function App() {
  const [ cardNumber, setCardNumber ] = React.useState('');

  const handleCardNumberChange = (newText) => {
    setCardNumber(newText);
  }

  const defaultDigits = '#### #### #### ####'.split('');

  const [ cardName, setCardName ] = React.useState('');
  const handleNameChange = (event) => {
    var val = event.target.value;
    if(val.length < defaultName.length){
      setCardName(val);
    }
  }
  const defaultName = '                    '.split('');

  const [ cardCCV, setCardCCV ] = React.useState('');
  const handleCCVChange = (event) => {
    var val = event.target.value;
    if(val.length < 4){
      setCardCCV(val);
    }
  }
  const [ isCCVFocused, setIsCCVFocused ] = React.useState(false);
  const handleCCVFocus = () => {
    setIsCCVFocused(true);
  }
  const handleCCVBlur = () => {
    setIsCCVFocused(false);
  }

  return (
    <div className="App">

      <div>
        {defaultDigits.map((char, index) => {
          var digit = cardNumber[index];
          var isPrivate = false;
          if(index > 4 && index < 14){
            isPrivate = true;
          }
          /*var isPrivate = index > 4 && index < 14;*/
          if(char == ' '){
            return <span style={{ marginLeft: 10 }}> </span>;
          } else {
            return <CardDigit
              private={isPrivate}
              value={digit}
              default={char} />;
          }
        })}
      </div>

      <div>
        {defaultName.map((char, index) => {
          var letter = cardName[index];
          if(letter) {
            letter = letter.toUpperCase();
          }
          return <CardDigit value={letter} default={char} />
        })}
      </div>

      <CardNumber
        onTextChange={handleCardNumberChange}
        value={cardNumber} />

      <br />
      <input value={cardName} onChange={handleNameChange} placeholder="nombre" />

      <br />
      <input value={cardCCV} onChange={handleCCVChange} onFocus={handleCCVFocus} onBlur={handleCCVBlur} />
    </div>
  );
}

export default App;
