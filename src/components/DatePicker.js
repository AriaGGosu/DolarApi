import React, { Component} from 'react';
import Calendar from 'react-calendar';

class DatePicker extends Component {

    constructor(props){
        const { data } = props;
        super(props);
        this.state = {
            data 
        }
    }

    render(){
        const { data} = this.state;
        return(
            <div className="calendarCont">
                <Calendar/>
                {
                    // @TODO
                    console.log(data)
                }
            </div>
        )
    }

}

export default DatePicker;