import React from 'react';
import DatePicker from './calendar';

const MyApp = () => {
    return (
        <div className="myAppCont">
            <DatePicker/>
        </div>
    )
}

MyApp.displayName = 'MyApp';

export default MyApp;