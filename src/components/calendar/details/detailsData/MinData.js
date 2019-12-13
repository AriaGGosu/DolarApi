import React from 'react';
import minValue from '../../../../arithmetic/minValue';

const minData = ({ price }) => {

    const min = `Valor minimo $ ${minValue(price)}`;
    return (
        <label className="details__text">{min}</label>
    )
}

export default minData;