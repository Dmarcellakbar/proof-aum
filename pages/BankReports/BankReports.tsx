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
    Icon,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Tfoot,
    Th,
    Thead,
    Tr
  } from '@chakra-ui/react';
  import { IconBaseProps, IconType } from 'react-icons';
import {UpdateData} from '../Dashboard/UpdateData.json';
  
  interface StatsCardProps {
    title: string;
    stat: string;
    icon: IconType;
  }
  
  function StatsCard() {
    // const { title, stat, icon } = props;
    return (
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
              <Th>To convert</Th>
              <Th textAlign={'right'}>into</Th>
              <Th isNumeric textAlign={'right'}>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody bgColor={'#1E2432'} >
            <Tr>
              <Td>inches</Td>
              <Td textAlign={'right'}>millimetres (mm)</Td>
              <Td isNumeric textAlign={'right'}>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td textAlign={'right'}>centimetres (cm)</Td>
              <Td isNumeric textAlign={'right'}>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td textAlign={'right'}>metres (m)</Td>
              <Td isNumeric textAlign={'right'}>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      </Stat>
    );
  }
  
  export default function BankReports() {
    return (
      <Box color={'white'} maxW="7xl">
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
        {/* {user.map((item) => ( */}
          <StatsCard/>
        {/* ))} */}
        </SimpleGrid>
      </Box>
    );
  }