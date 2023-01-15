import { SimpleGrid, Box } from '@chakra-ui/react';
import { getPostDetails, getPostIdList } from '../../../../src/DummyData/post';
import dynamic from 'next/dynamic'
const Titlepage = dynamic(() => import ('../../../../src/components/TitlePage'));
const PagePublic = dynamic(() => import ('../../../../src/components/PagePublic'));
const Boxtab = dynamic(() => import ('../../../../src/components/Boxtab'));
const Breadcrumb = dynamic(() => import("../../../../src/components/Breadcrumb"));
const AssetHolding = dynamic(() => import("../AssetHolding"));
const Layout = dynamic(() => import("../../../../src/components/Layout"));
const Timebar = dynamic(() => import("../../../../src/components/Timebar/Timebar"));

export async function getStaticPaths() {
  const paths = await getPostIdList();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const postData = await getPostDetails(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: any) {
  return (
    <>
    <Layout >
    <Box color={'white'} bgColor={'#121826'} h={'150vh'}>
    <PagePublic>
    <Timebar />
      <Breadcrumb children1={'AccountList'} children2={'Details'}/>
      <Titlepage child1={postData.title}/>
            <SimpleGrid spacingX={'2rem'} spacingY={'1rem'} columns={{ base: 1, md: 2 }}>
            <Boxtab child1={'Total Balance'} child2={postData.asset} child3={'/dollar-circle.png'}/>
            <Boxtab child1={'Tokens'} child2={postData.token} child3={'/bitcoin.png'}/>
            </SimpleGrid>
            <AssetHolding />
    </PagePublic>
    </Box>
    </Layout>
    </>
  );
}