import React from 'react';
import CardNumber from '../CardNumber/CardNumber';
import CardView from '../CardView/CardView';

const CreditCard = () => {
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

  return (<div>
    <CardView
    defaultDigits={defaultDigits}
    cardNumber={cardNumber}
    defaultName={defaultName}
    cardName={cardName}
    isCCVFocused={isCCVFocused} />

    <CardNumber
      onTextChange={handleCardNumberChange}
      value={cardNumber} />

    <br />
    <input value={cardName} onChange={handleNameChange} placeholder="nombre" />

    <br />
    <input value={cardCCV} onChange={handleCCVChange} onFocus={handleCCVFocus} onBlur={handleCCVBlur} />
  </div>);
}

export default CreditCard;