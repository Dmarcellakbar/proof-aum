import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    Spacer
  } from '@chakra-ui/react';
  import NextLink from 'next/link'
import {DataAccount} from '../../src/DummyData/DataAccount'
import Image from 'next/image'

  interface StatsCardProps {
    id: string;
    title: string;
    stat: string;
    asset: string;
    token: string;
  }
  
  function StatsCard(props: StatsCardProps) {
    const { title, stat, asset, token, id } = props;
    return (
    <>
    <NextLink key={id} href={'/AccountList/AccountDetails/'+id}>
      <Stat
        px={{ base: 2, md: 2, lg: 2}}
        py={'5'}
        shadow={'xl'}
        bgColor={'#212936'}
        rounded={'lg'}
        cursor={'pointer'}
        fontSize={{base: 14,  md: 16, lg:16}}>
        <Flex >
          <Box
            my={'auto'}
            color={'white'}
            alignContent={'center'}>
              <Box w={'48px'} cursor={'pointer'} mr={'1rem'}>
                <Image src={'/walleticon.png'} alt={'wallet'} width={48} height={48} loading="lazy"/>
                </Box>
          </Box>
          <Box>
            <StatLabel fontWeight={'700'} isTruncated>
              {title}
            </StatLabel>
            <StatLabel fontWeight={'400'} color={'#8F95A1'}>
              {stat}
            </StatLabel>
          </Box>
        </Flex>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <StatLabel fontWeight={'400'} color={'#8F95A1'}>
                    Total Assets
                    </StatLabel>
                </Box>
                <Spacer />
                <StatLabel fontWeight={'700'} isTruncated>
                    ${asset}
                </StatLabel>
            </Flex>

            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <StatLabel fontWeight={'400'} color={'#8F95A1'}>
                    Token Holding
                    </StatLabel>
                </Box>
                <Spacer />
                <StatLabel fontWeight={'700'} isTruncated>
                    {token}
                </StatLabel>
            </Flex>
      </Stat>
      </NextLink>
      </>
    );
  }

  
  export default function AccountList() {
    return (
      <Box bgColor={'#121826'} color={'white'} maxW="auto" ml={{ base: '4rem', md: '2rem', lg: '2rem' }} mr={{ base: '1rem', md: '4rem', lg: '4rem' }}>
        <chakra.h1
          textAlign={'left'}
          fontSize={'24px'}
          fontWeight={'700'}
          pb={'1rem'}>
        Account List
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 5, lg: 8 }}>
        {DataAccount.map((item: any) => (
          <StatsCard
            id={item.id}
            title={item.title}
            stat={item.stat} 
            asset={item.asset}
            token={item.token}
          />
        ))}
        </SimpleGrid>
      </Box>
    );
  }