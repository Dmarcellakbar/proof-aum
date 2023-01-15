import { Box } from '@chakra-ui/react'
import React from 'react'

export default function PagePublic({children}: any) {
  return (
    <>
        <Box 
        bgColor={'#121826'} 
        color={'white'} 
        maxW="auto" 
        ml={{ base: '4rem', md: '2rem', lg: '1rem' }} 
        mr={'1rem'}
        h={'max-content'}>
        {children}
        </Box>
    </>
  )
}
