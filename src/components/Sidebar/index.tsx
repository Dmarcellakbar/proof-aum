import {
    Box,
    List  } from '@chakra-ui/react';
import Route from './route';


export default function Sidebar() {
    return (
        <Box
          maxW={'242px'}
          color={'white'}
          bg={'#2A323E'}
          boxShadow={'2xl'}
          rounded={'24px'}
          p={6}
          >
            <List spacing={6}>
            <Route />
            </List>
        </Box>
    );
  }
