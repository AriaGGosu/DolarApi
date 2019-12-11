import React from 'react';
import './App.css';
import DatePicker from './components/DatePicker';
import { Grid, Row, Col} from "react-flexbox-grid";
import Chart from './components/Chart';

function App() {
  return (
    <div className="App">
      <Grid>
        <Row>
          <Col xs={12} md={6}>  
            <DatePicker data={"hola"}/>
          </Col>
          <Col xs={12} md={6}>
            <DatePicker data={"adios"}/>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Chart/>
          </Col>
        </Row>
        
      </Grid>
    </div>
  );
}

export default App;
