import {
    SimpleGrid  } from '@chakra-ui/react';
import {DataAccount} from '../../src/DummyData/DataAccount'
import dynamic from 'next/dynamic'
const Titlepage = dynamic(() => import("../../src/components/TitlePage"));
const PagePublic = dynamic(() => import("../../src/components/PagePublic"));
const BoxAccount = dynamic(() => import("../../src/components/BoxAccount"));

  export default function AccountList() {
    return (
      <PagePublic>
        <Titlepage child1={'Account Lists'}/>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 5, lg: 8 }}>
        {DataAccount.map((item: any) => (
          <div className='addhov'>
          <BoxAccount
            id={item.id}
            title={item.title}
            stat={item.stat} 
            asset={item.asset}
            token={item.token}
          />
          </div>
        ))}
        </SimpleGrid>
      </PagePublic>
    );
  }