import React from 'react';
import AverageData from './detailsData/AverageData';
import MinData from './detailsData/MinData';
import MaxData from './detailsData/MaxData';

import './style.css';

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

export default Details;