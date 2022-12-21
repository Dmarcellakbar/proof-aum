import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  Icon
} from '@chakra-ui/react';
import {UpdateData} from './UpdateData.json';
import {DataUser} from './DataUser.json';
import Image from 'next/image'
import Coin from '../../src/icons/dollar-circle.png'
import Wallet from '../../src/icons/wallet-money.png'
import Bitcoin from '../../src/icons/bitcoin.png'

const logoadd = [
  {logo: Coin},
  {logo: Wallet},
  {logo: Bitcoin},
]

export default function Dashboard() {
  return (
<Box color={'white'} maxW="7xl" >
        {UpdateData.map((v: any) => (
        <Text
          textAlign={'right'}
          fontSize={'16px'}
          fontWeight={'700'}
          pt={'2rem'}>
        Last update : {v.date}
        </Text>
        ))}
        <chakra.h1
            textAlign={'left'}
            fontSize={'24px'}
            fontWeight={'700'}
            pb={'1rem'}
            ml={'4rem'}>
          Dashboard
          </chakra.h1>
        <SimpleGrid ml={'4rem'} columns={{ base: 1, md: 3 }}>
        <Stat
      px={'2rem'}
      py={'5'}
      shadow={'xl'}
      bgColor={'#212936'}
      rounded={'lg'}
      mr={'2rem'}
      w={'354px'}>
      <Flex >
        <Box
          my={'auto'}
          color={'white'}
          alignContent={'center'}>
            <Box w={'24px'} cursor={'pointer'} mr={'1rem'}>
                <Image src={Coin} alt={'view'} />
                </Box>
        </Box>
        <Box>
          <StatLabel color={'#959BA6'} fontWeight={'400'} isTruncated>
          Exchange Assets
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
      px={'2rem'}
      py={'5'}
      shadow={'xl'}
      bgColor={'#212936'}
      rounded={'lg'}
      mr={'2rem'}>
      <Flex >
        <Box
          my={'auto'}
          color={'white'}
          alignContent={'center'}>
            <Box w={'24px'} cursor={'pointer'} mr={'1rem'}>
                <Image src={Coin} alt={'view'} />
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
      px={'2rem'}
      py={'5'}
      shadow={'xl'}
      bgColor={'#212936'}
      rounded={'lg'}>
      <Flex >
        <Box
          my={'auto'}
          color={'white'}
          alignContent={'center'}>
            <Box w={'24px'} cursor={'pointer'} mr={'1rem'}>
                <Image src={Coin} alt={'view'} />
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