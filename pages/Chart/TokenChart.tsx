import {
    Box,
    chakra,
    Grid,
    GridItem,
    SimpleGrid
  } from '@chakra-ui/react';
import CircularChart from './CircularChart';
import ListData from './ListData';

  export default function TokenChart() {
    return (
      <Box rounded={'12px'} color={'white'} maxW="auto" mt={'1.5rem'} >
        <chakra.h1
          textAlign={'left'}
          fontSize={'24px'}
          p={4}
          fontWeight={'700'}
          mx={'3rem'}>
          Token Holdings
        </chakra.h1>
        <SimpleGrid mx={'4rem'} spacingX={'2rem'} spacingY={'1rem'} columns={{ base: 1, md: 4 }}>

                <GridItem colSpan={{ base: 1, md: 2, lg: 1 }} bg={'#212936'} rounded={'12px'} w={{ base: 260, md: 'auto', lg: 'auto' }}>
                    <CircularChart />
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 2, lg: 3 }} bg={'#212936'} rounded={'12px'} w={{ base: 260, md: 'auto', lg: 'auto' }}>
                    <ListData />
                </GridItem>
        </SimpleGrid>
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