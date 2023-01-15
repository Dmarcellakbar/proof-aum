import { Tr, Text, Th, Thead } from '@chakra-ui/react';
import React from 'react'
  
  export default function TableAsset({child1, child2, child3, child4}: any) {
    return (
        <Thead bgColor={'#2A323E'}>
        <Tr>
          <Th>
          <Text fontSize={'14px'} fontWeight={'700'}>
            {child1}
            </Text>
            </Th>
          <Th textAlign={'right'}>
          <Text fontSize={'14px'} fontWeight={'700'}>
            {child2}
            </Text>
            </Th>
          <Th isNumeric textAlign={'right'}>
          <Text fontSize={'14px'} fontWeight={'700'}>
            {child3}
          </Text>
          </Th>
          <Th isNumeric textAlign={'right'}>
          <Text fontSize={'14px'} fontWeight={'700'}>
            {child4}
          </Text>
          </Th>
        </Tr>
      </Thead>
    );
  }
