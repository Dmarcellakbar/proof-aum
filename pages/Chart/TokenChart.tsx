import {
    Box,
    chakra,
    Grid,
    GridItem
  } from '@chakra-ui/react';
import CircularChart from './CircularChart';
import ListData from './ListData';

  export default function TokenChart() {
    return (
      <Box rounded={'12px'} color={'white'} maxW="auto" mt={'1.5rem'} px={'3rem'} mr={'1rem'}>
        <chakra.h1
          textAlign={'left'}
          fontSize={'24px'}
          p={4}
          fontWeight={'700'}>
          Token Holdings
        </chakra.h1>
        <Grid
             h='320px'
             templateRows='repeat(2, 1fr)'
             templateColumns='repeat(5, 1fr)'
             gap={4}
             pb={'1rem'}
             pl={'1rem'}
            >
                <GridItem bg={'#212936'} rounded={'12px'} rowSpan={2} colSpan={1} >
                    <CircularChart />
                </GridItem>
                <GridItem bg={'#212936'} rounded={'12px'} rowSpan={2} colSpan={4}>
                    <ListData />
                </GridItem>
        </Grid>
          {/* <StatsCard
            title={'Users'}
            stat={'5,000'}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Servers'}
            stat={'1,000'}
            icon={<FiServer size={'3em'} />}
          /> */}
      </Box>
    );
  }