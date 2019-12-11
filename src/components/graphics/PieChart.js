import React from 'react';
import { Pie } from 'react-chartjs-2';

const background = [];

const PieChart = ({ price, dates }) =>  {

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
                <Pie
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

export default PieChart;