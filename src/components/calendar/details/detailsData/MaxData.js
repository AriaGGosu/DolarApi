import React from 'react';
import PropTypes from 'prop-types';
import maxValue from '../../../../arithmetic/maxValue';

const MaxData = ({ price }) => {
    return (
        <label className="details__text">Valor maximo $ {maxValue(price)}</label>
    )
}


MaxData.propTypes = {
    price: PropTypes.array.isRequired
}

MaxData.displayName = 'MaxData';

export default MaxData;