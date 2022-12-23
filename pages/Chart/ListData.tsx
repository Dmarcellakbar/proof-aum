import { SimpleGrid, Box, Text, ButtonGroup, Flex, Heading, Spacer, HStack } from '@chakra-ui/react'
import React from 'react'
import {MdCircle} from 'react-icons/md'
import {Dummydata} from './DummyData.json';
interface boxcardprops {
    labels: string;
    data: string;
    color: string;
  }

function Boxcard(props: boxcardprops) {
    const { labels, data, color } = props;
    return (
        <Box height='40px'>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='1'>
                <HStack>
                <Box color={color}>
                    <MdCircle />
                </Box> 
                <Heading size={{ base: 'sm', md: 'md', lg: 'md' }}>
                    {labels}
                </Heading>
                </HStack>
            </Box>
            <Spacer />
            <ButtonGroup gap='1'>
                <Text size={{ base: 'sm', md: 'md', lg: 'md' }}>{data}</Text>
            </ButtonGroup>
        </Flex>
    </Box>
    );
  }

export default function ListData() {
  return (
    <>
    <SimpleGrid columns={2} spacing={{ base: 2, md: 3 }} mx={{ base: '0.5rem', md: '1.5rem' }} pt={'1rem'}>
    {Dummydata.map((item: any) => (   
        <Boxcard key={item.labels} labels={item.labels} data={item.data} color={item.color}/>
        ))} 
    </SimpleGrid>
    </>
  )
}
