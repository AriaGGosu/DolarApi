import React from 'react';
import average from '../../../../arithmetic/average';

const AverageData = ({ price }) => {
    return (
        <label className="details__text">Promedio Dolar $ {average(price)}</label>
    )
}

export default AverageData;