import React from 'react';
import { Bar } from 'react-chartjs-2';


const background = [];


const BarChart = ({ price, dates }) =>  {

    for(let i = 0; i < price.length; i++){
        background[i] = '#006edc'
    }
    const chartData = {
        labels: dates,
        datasets: [
            {
                label:'Dolar',
                data: price,
                backgroundColor: background
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
                        },
                        legend: {
                            display:true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        )
}

export default BarChart;