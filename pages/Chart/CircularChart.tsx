import { Box } from '@chakra-ui/react';
import 'chart.js/auto'; 
import { Doughnut } from "react-chartjs-2";
import Dummydata from "./Dummydata";

const chartdata = {
    labels: Dummydata().map((v: any) => v.labels),
    datasets: [
      {
          data: Dummydata().map((v: any) => v.data),
          backgroundColor: Dummydata().map((v: any) => v.color),
          hoverBackgroundColor: Dummydata().map((v: any) => v.color),
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
  cutout: 100,
}

export default function DataChart () {
    return (
    <Box px={'1rem'} py={'1rem'}>
        <Doughnut data={chartdata} width={250} height={250} options={options} />
    </Box>
    );
}

