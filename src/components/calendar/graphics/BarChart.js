import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const BarChart = ({ price, dates }) =>  {
    
    const background = [];
    
    for(let i = 0; i < price.length; i++){
        background[i] = '#006edc'
    }

    const chartData = {
        labels: dates,
        datasets: [
            {
                data: price,
                backgroundColor: background,
                fontColor: '#fff'
            }
        ]
    }

    return(
        <div className="chart">
            <Bar
                data={chartData}
                options={{
                    title: {
                        display:true,
                        text: 'Precio del dolar',
                        fontSize: 25,
                        fontColor: '#fff'
                    },
                    legend: {
                        display:false
                    },
                    scales: { 
                        yAxes: [{
                            ticks: {
                                fontColor: "#fff",
                                fontSize: 14,
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "#fff",
                                fontSize: 14
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

BarChart.displayName = 'BarChart';

BarChart.propTypes = {
    price: PropTypes.array.isRequired,
    dates: PropTypes.array.isRequired
}

export default BarChart;