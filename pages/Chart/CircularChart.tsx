import { Box } from '@chakra-ui/react';
import 'chart.js/auto'; 
import { Doughnut } from "react-chartjs-2";
import { dummydata } from "./Dummydata";

const chartdata = {
    labels: dummydata().map((v: any) => v.labels),
    datasets: [
      {
          data: dummydata().map((v: any) => v.data),
          backgroundColor: dummydata().map((v: any) => v.color),
          hoverBackgroundColor: dummydata().map((v: any) => v.color),
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

