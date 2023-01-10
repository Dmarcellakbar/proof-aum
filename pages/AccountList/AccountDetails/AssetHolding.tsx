import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    Text,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    HStack  } from '@chakra-ui/react';
import {AssetData} from '../../../src/DummyData/AssetData';
import Image from 'next/image'

  interface StatsCardProps {
    assets: string;
    net: string;
    balance: string;
    price: string;
    value: string;
    icon: any;
  }
  
  function StatsCard(props: StatsCardProps) {
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
  
  export default function BankReports() {
    return (
      <Box color={'white'} maxW="auto" pt={'2rem'}>
        <chakra.h1
            textAlign={'left'}
            fontSize={'24px'}
            fontWeight={'700'}
            pb={'1rem'}
            ml={{ base: '4rem', md: '2rem', lg: '2rem' }}>
          Asset Holdings
          </chakra.h1>
        <SimpleGrid ml={{ base: '4rem', md: '2rem', lg: '2rem' }} mr={{ base: '1rem', md: '4rem', lg: '4rem' }} columns={{ base: 1, md: 1 }}>
        <Stat
        bgColor={'#1E2432'}
        rounded={'16px'}
        shadow={'xl'}
        >
        <TableContainer bgColor={'#1E2432'} rounded={'16px'}>
        <Table variant='unstyled'>
          {/* <TableCaption bgColor={'#1E2432'}>Imperial to metric conversion factors</TableCaption> */}
          <Thead bgColor={'#2A323E'}>
            <Tr>
              <Th>
              <Text fontSize={'14px'} fontWeight={'700'}>
                Assets
                </Text>
                </Th>
              <Th textAlign={'right'}>
              <Text fontSize={'14px'} fontWeight={'700'}>
                Balance
                </Text>
                </Th>
              <Th isNumeric textAlign={'right'}>
              <Text fontSize={'14px'} fontWeight={'700'}>
                Price
              </Text>
              </Th>
              <Th isNumeric textAlign={'right'}>
              <Text fontSize={'14px'} fontWeight={'700'}>
                Value
              </Text>
              </Th>
            </Tr>
          </Thead>
        {AssetData.map((item) => (
          <StatsCard assets={item.assets} net={item.net} balance={item.balance} price={item.price} value={item.value} icon={item.icon}/>
        ))} 
            </Table>
        </TableContainer>
        </Stat>
        </SimpleGrid>
      </Box>
    );
  }