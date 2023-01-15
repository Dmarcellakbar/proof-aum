import { Tbody, Tr, Td, HStack, Box, Text } from '@chakra-ui/react';
import Image from 'next/image'
import React from 'react'


interface StatsCardProps {
    assets: string;
    net: string;
    balance: string;
    price: string;
    value: string;
    icon: any;
  }
  
  export default function TableAsset(props: StatsCardProps) {
    const { assets, balance, price, value, net, icon } = props;
    return (
      
      <Tbody bgColor={'#1E2432'} >
            <Tr>
              <Td>
                <HStack>
                <Box w={'24px'} mr={'1rem'}>
                <Image src={icon} alt={'view'} width={24} height={24} loading="lazy"/>
                </Box>
                <Text fontSize={'16px'} fontWeight={'600'}>
                {assets}</Text>
                <Text color={'#959BA6'} fontSize={'16px'} fontWeight={'400'}>
                {net}</Text>
                </HStack></Td>
              <Td textAlign={'right'}>{balance}</Td>
              <Td textAlign={'right'}>
                ${price}
              </Td>
              <Td textAlign={'right'}>
                ${value}
              </Td>
            </Tr>
            </Tbody>
    );
  }
