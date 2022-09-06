import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api';
import {Line, Bar}  from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

import styles from './Chart.module.css';

Chart.register(...registerables);

const CovidChart = () => {
   const [dailyData, setDailyData] = useState([]);


   useEffect(() => {
    const fetchAPI = async() => {
      setDailyData( await fetchDailyData());
    }


    //console.log('dailyData in chart', dailyData);

    fetchAPI();
   });


   const lineChart = (
      dailyData.length
      ? (
      <Line
      data = {{
         labels: dailyData.map(({ date }) => date ),
         datasets: [{
            data: dailyData.map(({confirmed}) => confirmed),
            label: 'Infected',
            borderColor: '#333ff',
            fill: true,
         }, {
            data: dailyData.map(({deaths}) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
         }],
      }}
      />) : null
      
   );


     return (
       <div className={styles.container}>
         {lineChart}
       </div>
     )
}

export default CovidChart;

