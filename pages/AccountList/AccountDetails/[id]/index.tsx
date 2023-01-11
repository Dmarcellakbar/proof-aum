import { chakra, SimpleGrid, Stat, Flex, StatLabel, StatNumber, Box, Button, Text } from '@chakra-ui/react';
import { getPostDetails, getPostIdList } from '../../../../src/DummyData/post';
import Image from 'next/image'
import Layout from '../../../../src/components/Layout';
import Timebar from '../../../../src/components/Timebar/Timebar';
import AssetHolding from '../AssetHolding';
import Breadcrumb from '../../../../src/components/Breadcrumb/Breadcrumb';

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
    <Timebar />
    <Box color={'white'} maxW="auto" h={'150vh'} >
      {/* <Box ml={{ base: '3rem', md: '2rem', lg: '2rem' }} w={50}>
      <div className='addhov' style={{width: '100px'}}>
      <Link href={'/AccountList'}>
      <Button colorScheme='transparent' ><ArrowLeftIcon /><Text ml={2}>Back</Text></Button>
      </Link>
      </div>
      </Box> */}
      <Box ml={{base: '2rem', md: '1rem', lg: '1rem'}}>
      <Breadcrumb children1={'AccountList'} children2={'Details'}/>
      </Box>
            <chakra.h1
                textAlign={'left'}
                fontSize={'24px'}
                fontWeight={'700'}
                pb={'1rem'}
                ml={{ base: '4rem', md: '2rem', lg: '2rem' }}>
                    {postData.title}
                </chakra.h1>
            <SimpleGrid ml={{ base: '4rem', md: '2rem', lg: '2rem' }} mr={{ base: '1rem', md: '4rem', lg: '4rem' }} spacingX={'2rem'} spacingY={'1rem'} columns={{ base: 1, md: 2 }}>
            <Stat
            px={'1rem'}
            py={'5'}
            shadow={'xl'}
            bgColor={'#212936'}
            rounded={'lg'}
            w={'auto'}
            className='borderbox'>
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
                <StatNumber fontSize={'24px'} fontWeight={'700'}>
                {postData.asset}
                </StatNumber>
            </Box>
            </Flex>
        </Stat>
    
        <Stat
            px={'1rem'}
            py={'5'}
            shadow={'xl'}
            bgColor={'#212936'}
            rounded={'lg'}
            className='borderbox'>
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
                <StatNumber fontSize={'24px'} fontWeight={'700'}>
                {postData.token}
                </StatNumber>
            </Box>
            </Flex>
        </Stat>
            </SimpleGrid>
            <AssetHolding />
            </Box>
            </Layout>
        </>
  );
}