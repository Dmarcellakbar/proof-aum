import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    Text  } from '@chakra-ui/react';
  import {DataUser} from '../../Dashboard/DataUser.json';
  import Image from 'next/image'

  export default function Dashboard() {
    return (
        <>
    <Box color={'white'} maxW="auto" >
            <chakra.h1
                textAlign={'left'}
                fontSize={'24px'}
                fontWeight={'700'}
                pb={'1rem'}
                ml={{ base: '4rem', md: '2rem', lg: '2rem' }}>
                    Account 1
                </chakra.h1>
            <SimpleGrid ml={{ base: '4rem', md: '2rem', lg: '2rem' }} mr={{ base: '1rem', md: '4rem', lg: '4rem' }} spacingX={'2rem'} spacingY={'1rem'} columns={{ base: 1, md: 2 }}>
            <Stat
            px={'1rem'}
            py={'5'}
            shadow={'xl'}
            bgColor={'#212936'}
            rounded={'lg'}
            w={'auto'}>
            <Flex >
            <Box
                my={'auto'}
                color={'white'}
                alignContent={'center'}>
                <Box w={'32px'} cursor={'pointer'} mr={'1rem'}>
                    <Image src={'/dollar-circle.png'} alt={'view'} width={32} height={32} loading="lazy"/>
                    </Box>
            </Box>
            <Box>
                <StatLabel color={'#959BA6'} fontWeight={'400'} isTruncated>
                Total Balance
                </StatLabel>
                {DataUser.map((v)=>
                <StatNumber fontSize={'24px'} fontWeight={'700'}>
                {v.Asset}
                </StatNumber>
                )}
            </Box>
            </Flex>
        </Stat>
    
        <Stat
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
        </>
    );
  }