import React from 'react';
import PropTypes from 'prop-types';
import './CardView.css';
import CardDigit from '../CardDigit/CardDigit';

const CardView = (props) => {
    const { defaultDigits, cardNumber, defaultName, cardName, isCCVFocused } = props;
    var className = 'CardView';
    if(isCCVFocused){
        className += ' CardView--back';
    }
    return <div className={className}>
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
    </div>
}

CardView.propTypes = {
    defaultDigits: PropTypes.string,
    cardNumber: PropTypes.string,
    defaultName: PropTypes.string,
    cardName: PropTypes.string,
    isCCVFocused: PropTypes.bool,
}

export default CardView;