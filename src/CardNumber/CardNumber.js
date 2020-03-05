import React from 'react';
import PropTypes from 'prop-types';

const CardNumber = (props) => {
    const inter = (event) => {
        var value = event.target.value;
        
        value = value.replace(/\D/g, '');
        value = value.slice(0, 16);
        
        var arr = value.split('');
        [4, 9, 14].forEach((num) => {
            if(arr.length > num){
                arr.splice(num, 0, ' ');
            }
        })

        value = arr.join('');

        props.onTextChange(value);
    }
    return (<input onInput={inter} 
        onChange={inter} 
        value={props.value} />);
}

CardNumber.propTypes = {
    onTextChange: PropTypes.func,
    value: PropTypes.string,
}

export default CardNumber;