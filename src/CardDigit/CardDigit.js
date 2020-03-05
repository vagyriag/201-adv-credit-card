import React from 'react';
import PropTypes from 'prop-types';
import './CardDigit.css';

const CardDigit = (props) => {
    var className = 'CardDigit';
    if(props.value){
        className += ' CardDigit--filled';
    }
    return <span className={className}>
        <span className="CardDigit__default">{props.default || '#'}</span>
        <span className="CardDigit__value">{props.private ? '*' : props.value}</span>
    </span>
}

CardDigit.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.bool,
}

export default CardDigit;