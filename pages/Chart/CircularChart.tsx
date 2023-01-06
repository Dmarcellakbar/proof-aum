import { Box } from '@chakra-ui/react';
import 'chart.js/auto'; 
import { Doughnut } from "react-chartjs-2";
import { DummyData } from './DummyData';

export default function DataChart () {
    const chartdata  = {
        labels: DummyData.map((v: any) => v.labels),
        datasets: [
          {
              data: DummyData.map((v: any) => v.data),
              backgroundColor: DummyData.map((v: any) => v.color),
              hoverBackgroundColor: DummyData.map((v: any) => v.color),
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
    <Box px={'1rem'} py={'1rem'} width={{ base: 250, md: 300, lg: 300 }} height={{ base: 250, md: 300, lg: 300 }}>
        <Doughnut data={chartdata} width={'auto'} height={'auto'} options={options} />
    </Box>
    );
}

