import React from 'react';
import PropTypes from 'prop-types';
import AverageData from './detailsData/AverageData';
import MinData from './detailsData/MinData';
import MaxData from './detailsData/MaxData';

const Details = ({ price}) => {
    return ( 
        <div className="details">
            <h2>Detalles</h2>
            <AverageData price={price}/>
            <MaxData price={price}/>
            <MinData price={price}/>
        </div> 
    )
}


// eslint-disable-next-line react/no-typos
Details.propTypes = {
    price: PropTypes.array.isRequired
}

Details.displayName = 'Details';

export default Details;