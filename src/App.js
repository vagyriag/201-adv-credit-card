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

      <CardNumber
        onTextChange={handleCardNumberChange}
        value={cardNumber} />
    </div>
  );
}

export default App;
