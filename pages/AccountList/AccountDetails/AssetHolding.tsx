import {
    Box,
    SimpleGrid,
    Stat,
    Table,
    TableContainer  } from '@chakra-ui/react';
import {AssetData} from '../../../src/DummyData/AssetData';
import dynamic from 'next/dynamic'
const Tablehead = dynamic(() => import("../../../src/components/TableAsset/Tablehead"));
const Tablebody = dynamic(() => import("../../../src/components/TableAsset/Tablebody"));
const Titlepage = dynamic(() => import("../../../src/components/TitlePage"));

  
  export default function BankReports() {
    return (
      <Box pt={'2rem'}>
        <Titlepage child1={'Asset Holdings'}/>
        <SimpleGrid columns={{ base: 1, md: 1 }}>
        <Stat
        bgColor={'#1E2432'}
        rounded={'16px'}
        shadow={'xl'}
        >
        <TableContainer bgColor={'#1E2432'} rounded={'16px'}>
        <Table variant='unstyled'>
          <Tablehead 
            child1={'Assets'}
            child2={'Balance'}
            child3={'Price'}
            child4={'Value'}/>
        {AssetData.map((item) => (
          <Tablebody assets={item.assets} net={item.net} balance={item.balance} price={item.price} value={item.value} icon={item.icon}/>
        ))} 
            </Table>
        </TableContainer>
        </Stat>
        </SimpleGrid>
      </Box>
    );
  }