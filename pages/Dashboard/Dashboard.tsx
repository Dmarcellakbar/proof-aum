import {
  Box,
  SimpleGrid} from '@chakra-ui/react';
import {DataUser} from '../../src/DummyData/DataUser';
import dynamic from 'next/dynamic'
const PagePublic = dynamic(() => import("../../src/components/PagePublic"));
const Boxtab = dynamic(() => import ('../../src/components/Boxtab'));
const Titlepage = dynamic(() =>import ('../../src/components/TitlePage'));
const Breadcrumb = dynamic(() => import("../../src/components/Breadcrumb"));
const TokenChart = dynamic(() => import("../Chart"));
const Timebar = dynamic(() => import("../../src/components/Timebar/Timebar"));
const AccountList = dynamic(() => import("../AccountList/AccountList"));

export default function Dashboard() {
  return (
<PagePublic>
<Timebar />
<Breadcrumb children2={'Dashboard'}/>
<Box ml={{ base: '1rem', md: '2rem', lg: '1rem' }}>
<Titlepage child1={'Dashboard'}/>
</Box>
        <SimpleGrid ml={{ base: '1rem', md: '2rem', lg: '1rem' }} spacingX={'1rem'} spacingY={'1rem'} columns={{ base: 1, md: 3 }}>
    {DataUser.map((v)=> 
    <>
    <Boxtab child1={'Exchange Assets'} child2={'$'+v.Asset} child3={'/dollar-circle.png'}/>
    <Boxtab child1={'Account Totals'} child2={v.Account} child3={'/wallet-dash.png'}/>
    <Boxtab child1={'Token'} child2={v.Token} child3={'/bitcoin.png'}/>
    </>
    )}
        </SimpleGrid>
      <TokenChart/>
      <Box mt={'2rem'} mb={'4rem'} ml={{ base: '-3rem', md: 0, lg: 0 }}>
      <AccountList />
      </Box>
      </PagePublic>
  );
}