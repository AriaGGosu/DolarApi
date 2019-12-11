import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['jp','chupalito','sebitaGod','Fabiberto','DrakeKakeWafle'],
                datasets: [
                    {
                        label:'population',
                        data:[
                            123456,
                            152783,
                            231467,
                            357178,
                            626216,
                            123567
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6',
                            'rgba(255, 99, 132, 0.6',
                            'rgba(255, 99, 132, 0.6',
                            'rgba(255, 99, 132, 0.6',
                            'rgba(255, 99, 132, 0.6',
                            'rgba(255, 99, 132, 0.6',
                            'rgba(255, 99, 132, 0.6'
                        ]
                    }
                ]
            }
        }
    }
    render(){
        const { chartData } = this.state;
        return(
            <div className="chart">
                <Bar
                    data={chartData}
                    options={{ maintainAspectRatio: false }}
                />
            </div>
        )
    }
}

export default Chart;