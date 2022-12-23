import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text} from '@chakra-ui/react';
import {UpdateData} from './UpdateData.json';
import {DataUser} from './DataUser.json';
import Image from 'next/image'

export default function Dashboard() {
  return (
<Box color={'white'} maxW="auto" >
        {UpdateData.map((v: any) => (
        <Text
          textAlign={'right'}
          fontSize={{ base: '12px', md: '16px', lg: '16px' }}
          fontWeight={{ base: 500, md: 700, lg: 700 }}
          pt={'2rem'}
          mx={{ base: '2rem', md: '4rem', lg: '4rem' }}>
        Last update : {v.date}
        </Text>
        ))}
        <chakra.h1
            textAlign={'left'}
            fontSize={'24px'}
            fontWeight={'700'}
            ml={'4rem'}>
          Dashboard
          </chakra.h1>
        <SimpleGrid mx={'4rem'} spacingX={'2rem'} spacingY={'1rem'} columns={{ base: 1, md: 3 }}>
          
        <Stat
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
            <Box w={'32px'} cursor={'pointer'} mr={'0.5rem'}>
                <Image src={'/dollar-circle.png'} alt={'view'} width={32} height={32}/>
                </Box>
        </Box>
        <Box>
          <StatLabel color={'#959BA6'} fontWeight={'400'} isTruncated>
          Exchange Assets
          </StatLabel>
          {DataUser.map((v)=>
          <StatNumber fontSize={{ base: '22px', md: '22px', lg: '24px' }} fontWeight={'700'}>
          {v.Asset}
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
      rounded={'lg'}>
      <Flex >
        <Box
          my={'auto'}
          color={'white'}
          alignContent={'center'}>
            <Box w={'32px'} cursor={'pointer'} mr={'0.5rem'}>
                <Image src={'/wallet-dash.png'} alt={'view'} width={32} height={32}/>
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
      rounded={'lg'}>
      <Flex >
        <Box
          my={'auto'}
          color={'white'}
          alignContent={'center'}>
            <Box w={'32px'} cursor={'pointer'} mr={'0.5rem'}>
                <Image src={'/bitcoin.png'} alt={'view'} width={32} height={32}/>
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