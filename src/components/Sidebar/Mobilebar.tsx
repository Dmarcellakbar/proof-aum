import {
    Box,
    List,
  } from '@chakra-ui/react';

import Route from './route';
  
export default function Mobilebar() {
    return (
      <Box
      maxW={'60px'}
      color={'white'}
      bg={'#2A323E'}
      boxShadow={'2xl'}
      rounded={'24px'}
      p={3}
      >
        <List spacing={4}>
        <Route />
        </List>
    </Box>
    );
  }
  