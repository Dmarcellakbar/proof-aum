import { Box } from '@chakra-ui/react';
import 'chart.js/auto'; 
import { Doughnut } from "react-chartjs-2";
import { DataChart } from '../../src/DummyData/DataChart';

export default function CircularChart () {
    const chartdata  = {
        labels: DataChart.map(v=> v.labels),
        datasets: [
          {
              data: DataChart.map(v=> v.data),
              backgroundColor: DataChart.map(v=> v.color),
              hoverBackgroundColor: DataChart.map(v=> v.color),
              hoverOffset: 4,      
          },
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
        elements: {
            arc: {
                weight: 0.5,
                borderWidth: 3,
            },
        },
        cutout: 90,
      }
    
    return (
    <>
        <Box px={'1rem'} py={'1rem'} width={{ base: 250, md: 300, lg: 300 }} height={{ base: 250, md: 300, lg: 300 }}>
            <Doughnut data={chartdata} width={'auto'} height={'auto'} options={options} />
        </Box>
    </>
    );
}

