import React from 'react';
import PropTypes from 'prop-types';
import minValue from '../../../../arithmetic/minValue';

const MinData = ({ price }) => {

    const min = `Valor minimo $ ${minValue(price)}`;
    return (
        <label className="details__text">{min}</label>
    )
}

MinData.propTypes = {
    price: PropTypes.array.isRequired
}

MinData.displayName = 'MinData';

export default MinData;