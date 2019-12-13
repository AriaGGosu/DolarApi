import React from 'react';
import PropTypes from 'prop-types';
import average from '../../../../arithmetic/average';

const AverageData = ({ price }) => {
    return (
        <label className="details__text">Promedio Dolar $ {average(price)}</label>
    )
}


AverageData.propTypes = {
    price: PropTypes.array.isRequired
}

AverageData.displayName = 'AverageData';

export default AverageData;