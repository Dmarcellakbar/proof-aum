import { Box } from '@chakra-ui/react';
import 'chart.js/auto'; 
import { Doughnut } from "react-chartjs-2";
import { chartdata, options } from './DataChart';

export default function DataChart () {
    return (
    <Box px={'1rem'} py={'1rem'}>
        <Doughnut data={chartdata} width={250} height={250} options={options} />
    </Box>
    );
}

