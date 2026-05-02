import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TournamentGraph = () => {
  const chartRef = useRef(null);
  let tournamentChartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    
    if (tournamentChartInstance.current) {
      tournamentChartInstance.current.destroy();
    }

   
    tournamentChartInstance.current = new Chart(ctx, {
      type: 'bar', 
      data: {
        labels: ['2012', '2013', '2014', '2015', '2023'], 
        datasets: [
          {
            label: 'Male Teams',
            data: [40, 48, 55, 64, 70], 
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          {
            label: 'Female Teams',
            data: [22, 25, 26, 28, 30], 
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });

    
    return () => {
      if (tournamentChartInstance.current) {
        tournamentChartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas id="tournamentBarChart" ref={chartRef} />
    </div>
  );
};

export default TournamentGraph;
