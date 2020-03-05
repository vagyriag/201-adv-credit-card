import React from 'react';
import PropTypes from 'prop-types';
import './CardDigit.css';

const CardDigit = (props) => {
    
    return <span className="CardDigit">
        {!props.value && <span>{props.default || '#'}</span>}
        <span>{props.value}</span>
    </span>
}

CardDigit.propTypes = {
    value: PropTypes.number,
    default: PropTypes.string,
    private: PropTypes.string,
}

export default CardDigit;