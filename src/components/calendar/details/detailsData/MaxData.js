import React from 'react';
import maxValue from '../../../../arithmetic/maxValue';

const AverageData = ({ price }) => {
    return (
        <label className="details__text">Valor maximo $ {maxValue(price)}</label>
    )
}

export default AverageData;