import React, { Component} from 'react';
import Calendar from 'react-calendar';
import { Grid, Row, Col} from "react-flexbox-grid";
import BarChart from '../graphics/BarChart';
import PieChart from '../graphics/PieChart';
import makeApiUrl from '../../constants/api_dolar';

class DatePickerA extends Component {

    constructor(props){
        super(props);
        this.state = {
            dateStart: "ccccccccccccccccccccccccccccccccccccccccc",
            dateEnd: "ccccccccccccccccccccccccccccccccccccccccc",
            price: [],
            dates: [],
            // @TODO 
            dias: [],
            mes: [],
            año: []
        }
    }

    onChangeA = data => {
        this.setState({
            dateStart: data
        })
    }
    
    onChangeB = data => {
        this.setState({
            dateEnd: data
        })
    }

    componentDidMount() {

        const yyyy = "2019";
        const mm = "7";
        const dd = "1";

        fetch(makeApiUrl(yyyy, mm, dd))
        .then(res => res.json())
        .then(json => {
            const dolarValue = [];
            const dolarDate = [];
            console.log("json.Dolares",json.Dolares)
                json.Dolares.map((element, index) => {
                        dolarValue[index] = parseInt(element.Valor)
                        dolarDate[index] = element.Fecha;
                })
                this.setState({
                    price: dolarValue,
                    dates: dolarDate

                })
            }).catch( err => console.log(err));
}

    render(){
        const { dateStart } = this.state

        let data = new Date(dateStart);

        let yyyy =data.getFullYear();
        let mm = data.getMonth();
        let dd = data.getDay();
        
        console.log(data)

        console.log("year", yyyy, "month", mm, "day", dd);

       const { price, dates} = this.state;
        return(
            <div>
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={12} md={5} lg={4}>  
                            <div className="calendarCont">
                                <label>Fecha de Inicio</label>
                                <Calendar onChange={this.onChangeA}/>
                                <label>Fecha de Final</label>
                                <Calendar onChange={this.onChangeB}/> 
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={7} lg={8}>
                            <div className="chartCont">
                            <BarChart price={price} dates={dates}/>
                            <PieChart price={price} dates={dates}/>
                            </div>
                        </Col> 
                    </Row>
                </Grid>
            </div>
        )
    }

}

export default DatePickerA;