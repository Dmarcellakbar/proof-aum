import {
    Box,
    chakra,
    Grid,
    GridItem,
    SimpleGrid
  } from '@chakra-ui/react';
import dynamic from 'next/dynamic'
const Titlepage = dynamic(() => import("../../src/components/TitlePage"));
const CircularChart = dynamic(() => import("./CircularChart"));
const ListData = dynamic(() => import("./ListData"));

  export default function TokenChart() {
    return (
      <Box rounded={'12px'} color={'white'} maxW="auto" mt={'1.5rem'} >
        <Box ml={{ base: '1rem', md: '2rem', lg: '1rem' }}>
        <Titlepage child1={'Token Holdings'}/>
        </Box>
        <SimpleGrid ml={{ base: '1rem', md: '2rem', lg: '1rem'  }} spacingX={'2rem'} spacingY={'1rem'} columns={{ base: 1, md: 4, lg: 6 }}>
                <GridItem textAlign={'center'} colSpan={{ base: 1, md: 2, lg: 2 }} bg={'#212936'} rounded={'12px'} w={{ base: 260, md: 'auto', lg: 'auto' }}>
                    <Box w={'auto'} alignItems={'center'}>
                    <CircularChart />
                    </Box>
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 2, lg: 4 }} bg={'#212936'} rounded={'12px'} w={{ base: 260, md: 'auto', lg: 'auto' }}>
                    <ListData />
                </GridItem>
        </SimpleGrid>
      </Box>
    );
  }