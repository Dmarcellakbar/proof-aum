import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text} from '@chakra-ui/react';
import {DataUser} from '../../src/DummyData/DataUser';
import Image from 'next/image'
import Breadcrumb from '../../src/components/Breadcrumb/Breadcrumb';

export default function Dashboard() {
  return (
<Box color={'white'} maxW="auto" >
  <Box ml={{base: '2rem', md: '1rem', lg: '1rem'}}>
<Breadcrumb children2={'Dashboard'}/>
</Box>
        <chakra.h1
            textAlign={'left'}
            fontSize={'24px'}
            fontWeight={'700'}
            ml={{ base: '4rem', md: '2rem', lg: '2rem' }}>
          Dashboard
          </chakra.h1>
        <SimpleGrid ml={{ base: '4rem', md: '2rem', lg: '2rem' }} mr={{ base: '1rem', md: '4rem', lg: '4rem' }} spacingX={'1rem'} spacingY={'1rem'} columns={{ base: 1, md: 3 }}>
          
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
                <Image src={'/dollar-circle.png'} alt={'view'} width={32} height={32} loading="lazy"/>
                </Box>
        </Box>
        <Box>
          <StatLabel color={'#959BA6'} fontWeight={'400'} isTruncated>
          Exchange Assets
          </StatLabel>
          {DataUser.map((v)=>
          <StatNumber fontSize={{ base: '22px', md: '22px', lg: '24px' }} fontWeight={'700'}>
          ${v.Asset}
          </StatNumber>
          )}
        </Box>
      </Flex>
    </Stat>

    <Stat
    w={{ base: '250px', md: 'auto', lg: 'auto' }}
      px={'1rem'}
      py={'5'}
      shadow={'xl'}
      bgColor={'#212936'}
      rounded={'lg'}
      className='borderbox'>
      <Flex >
        <Box
          my={'auto'}
          color={'white'}
          alignContent={'center'}>
            <Box w={'32px'} cursor={'pointer'} mr={'1rem'}>
                <Image src={'/wallet-dash.png'} alt={'view'} width={32} height={32} loading="lazy"/>
                </Box>
        </Box>
        <Box>
          <StatLabel color={'#959BA6'} fontWeight={'400'} isTruncated>
          Account Totals
          </StatLabel>
          {DataUser.map((v)=>
          <StatNumber fontSize={'24px'} fontWeight={'700'}>
          {v.Account}
          </StatNumber>
          )}
        </Box>
      </Flex>
    </Stat>

    <Stat
    w={{ base: '250px', md: 'auto', lg: 'auto' }}
      px={'1rem'}
      py={'5'}
      shadow={'xl'}
      bgColor={'#212936'}
      rounded={'lg'}
      className='borderbox'>
      <Flex >
        <Box
          my={'auto'}
          color={'white'}
          alignContent={'center'}>
            <Box w={'32px'} cursor={'pointer'} mr={'1rem'}>
                <Image src={'/bitcoin.png'} alt={'view'} width={32} height={32} loading="lazy"/>
                </Box>
        </Box>
        <Box>
          <StatLabel color={'#959BA6'} fontWeight={'400'} isTruncated>
          Tokens
          </StatLabel>
          {DataUser.map((v)=>
          <StatNumber fontSize={'24px'} fontWeight={'700'}>
          {v.Token}
          </StatNumber>
          )}
        </Box>
      </Flex>
    </Stat>
        </SimpleGrid>
      </Box>
  );
}