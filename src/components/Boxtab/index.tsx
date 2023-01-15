import { Stat, Flex, StatLabel, StatNumber, Box } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

export default function Boxtab ({child1, child2, child3}: any) {
  return (
    <Stat
        className='borderbox'
        w={{ base: '250px', md: 'auto', lg: 'auto' }}
      px={'1rem'}
      py={'5'}
      shadow={'xl'}
      bgColor={'#212936'}
      rounded={'lg'}
      >
      <Flex >
        <Box
          my={'auto'}
          color={'white'}
          alignContent={'center'}>
            <Box w={'32px'} cursor={'pointer'} mr={{base: '1rem', md: '0.5rem', lg: '1rem'}}>
                <Image src={child3} alt={'view'} width={32} height={32} loading="lazy"/>
                </Box>
        </Box>
        <Box>
          <StatLabel color={'#959BA6'} fontWeight={'400'} isTruncated>
          {child1}
          </StatLabel>
          <StatNumber fontSize={{ base: '22px', md: '22px', lg: '24px' }} fontWeight={'700'}>
          {child2}
          </StatNumber>
        </Box>
      </Flex>
    </Stat>
  )
}
