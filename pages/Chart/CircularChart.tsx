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
              hoverOffset: 8,      
          },
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: '#227799',
                titleFontSize: 16,
                titleFontColor: '#0066ff',
                bodyFontColor: '#000',
                bodyFontSize: 14,
            }
        },
        elements: {
            arc: {
                weight: 0.5,
                borderWidth: 0,
            },
        },
        cutout: 90,
      }
    
    return (
    <>
        <Box  width={'auto'} >
            <Box px={{base: '1rem', md: '2rem', lg: '2.5rem'}} py={{base: '1rem', md: '1rem', lg: '1rem'}} height={{ base: 250, md: 300, lg: 300 }}>
            <Doughnut data={chartdata} width={'auto'} height={'auto'} options={options}/>
            </Box>
        </Box>
    </>
    );
}

