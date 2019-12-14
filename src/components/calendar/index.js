import React, { Component} from 'react';
import makeApiUrl from '../../constants/api_dolar';
import { Grid, Row, Col} from "react-flexbox-grid";
import Calendar from 'react-calendar';
import BarChart from './graphics/BarChart';
import Details from './details';

class DatePicker extends Component {

    constructor(){
        super();
        this.state = {
            dateEnd: "",
            price: [],
            dates: [],
            dd: "",
            mm: "",
            yyyy: ""
        }
    }
    
    setDateStart = data => {
        console.log("set data 1")
        let date = new Date(data)
        this.setState({
            yyyy : date.getFullYear(),
            mm : date.getMonth()+1,
            dd : date.getDate()
        })
        this.forceUpdate();
        this.callToApi();

    }
    
    setDateEnd = data => {

        console.log("set data 2")

        let date = new Date(data)
        this.setState({
            dateEnd: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate().toString()}`
        })
        this.forceUpdate();
        this.callToApi();
    }

    callToApi(){
        const {yyyy, dateEnd } = this.state;

        if(yyyy && dateEnd){
            this.getApiData();
        }

    }

    getApiData(){

        console.log("fetch")

        const { yyyy, mm, dd, dateEnd} = this.state;

        fetch(makeApiUrl(yyyy, mm, dd))
        .then(res => res.json())
        .then(json => {
            const dolarValue = [];  
            const dolarDate = [];            

            json.Dolares.map((element, index) => {
                let dateA = new Date(element.Fecha);
                let dateB = new Date(dateEnd);
                
                if(dateA <= dateB){
                    dolarValue[index] = parseInt(element.Valor)
                    dolarDate[index] = element.Fecha;
                }
            })
            this.setState({
                price: dolarValue,
                dates: dolarDate
            })
        }).catch( err => console.log(err));
    }

    render(){

        console.log("render")

       const { price, dates} = this.state;
        return(
            <div>
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={12} md={5} lg={4}>  
                            <div className="calendarCont">
                                <label className="calendar__text">Fecha de Inicio</label>
                                <Calendar onChange={this.setDateStart}/>
                            </div>
                            <div className="calendarCont">
                                <label className="calendar__text">Fecha de Final</label>
                                <Calendar onChange={this.setDateEnd}/> 
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={7} lg={8}>
                            <div className="calendarCont">
                                <BarChart price={price} dates={dates}/>
                            </div>
                            <Details price={price}/>
                        </Col> 
                    </Row>
                </Grid>
            </div>
        )
    }

}

DatePicker.displayName = 'DatePicker';

export default DatePicker;