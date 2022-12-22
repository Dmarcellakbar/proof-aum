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
    HStack,
    Spacer
  } from '@chakra-ui/react';
import {UpdateData} from '../Dashboard/UpdateData.json';
import {BankData} from './BankData.json';
import Viewicon from '../../src/icons/search-status.png'
import Downloadicon from '../../src/icons/document-download.png'
import Reporticon from '../../src/icons/document-text.png'
import Image from 'next/image'

  interface StatsCardProps {
    title: string;
    date: string;
  }
  
  function StatsCard(props: StatsCardProps) {
    const { title, date } = props;
    return (
          <Tbody bgColor={'#1E2432'} >
            <Tr>
              <Td>
                <HStack>
                <Box w={'24px'} cursor={'pointer'} mr={'1rem'}>
                <Image src={Reporticon} alt={'view'} />
                </Box>
                <Text fontSize={'16px'} fontWeight={'600'}>
                {title}</Text>
                </HStack></Td>
              <Td textAlign={'right'}>{date}</Td>
              <Td textAlign={'right'}>
                <HStack >
                <Spacer />
                <Box w={'24px'} cursor={'pointer'} mr={'1rem'}>
                <Image src={Viewicon} alt={'view'} />
                </Box>
                <Box w={'24px'} cursor={'pointer'}>
                <Image src={Downloadicon} alt={'download'} />
                </Box>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
    );
  }
  
  export default function BankReports() {
    return (
      <Box color={'white'} maxW="auto">
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
            pb={'1rem'}>
          Monthly Bank Reports
          </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 1 }}>
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
                Bank Statement
                </Text>
                </Th>
              <Th textAlign={'right'}>
              <Text fontSize={'14px'} fontWeight={'700'}>
                Date
                </Text>
                </Th>
              <Th isNumeric textAlign={'right'}>
              <Text fontSize={'14px'} fontWeight={'700'}>
                View/Download
              </Text>
              </Th>
            </Tr>
          </Thead>
        {BankData.map((item) => (
          <StatsCard title={item.title} date={item.date}/>
        ))} 
            </Table>
        </TableContainer>
        </Stat>
        </SimpleGrid>
      </Box>
    );
  }