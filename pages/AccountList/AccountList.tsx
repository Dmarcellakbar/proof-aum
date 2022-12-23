import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    Text,
    Spacer
  } from '@chakra-ui/react';
  import NextLink from 'next/link'
import {UpdateData} from '../Dashboard/UpdateData.json';
import {DataAccount} from './DataAccount.json'
import Image from 'next/image'

  interface StatsCardProps {
    title: string;
    stat: string;
    asset: string;
    token: string;
    link: string;
  }
  
  function StatsCard(props: StatsCardProps) {
    const { title, stat, asset, token, link } = props;
    return (
    <>
    <NextLink href={link}>
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        bgColor={'#212936'}
        rounded={'lg'}
        cursor={'pointer'}>
        <Flex >
          <Box
            my={'auto'}
            color={'white'}
            alignContent={'center'}>
              <Box w={'48px'} cursor={'pointer'} mr={'1rem'}>
                <Image src={'/walleticon.png'} alt={'wallet'} width={48} height={48}/>
                </Box>
          </Box>
          <Box>
            <StatLabel fontSize={'16px'} fontWeight={'700'} isTruncated>
              {title}
            </StatLabel>
            <StatLabel fontSize={'14px'} fontWeight={'400'} color={'#8F95A1'}>
              {stat}
            </StatLabel>
          </Box>
        </Flex>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <StatLabel fontSize={'14px'} fontWeight={'400'} color={'#8F95A1'}>
                    Total Assets
                    </StatLabel>
                </Box>
                <Spacer />
                <StatLabel fontSize={'16px'} fontWeight={'700'} isTruncated>
                    {asset}
                </StatLabel>
            </Flex>

            <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box p='2'>
                    <StatLabel fontSize={'14px'} fontWeight={'400'} color={'#8F95A1'}>
                    Token Holding
                    </StatLabel>
                </Box>
                <Spacer />
                <StatLabel fontSize={'16px'} fontWeight={'700'} isTruncated>
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
      <Box bgColor={'#121826'} color={'white'} maxW="auto" ml={{ base: '4rem', md: '2rem' }} mr={{ base: '1rem', md: '4rem' }}>
        {UpdateData.map((v: any) => (
        <Text
            textAlign={'right'}
            fontSize={{ base: '12px', md: '16px', lg: '16px' }}
          fontWeight={{ base: 500, md: 700, lg: 700 }}
          pt={'2rem'}>
        Last update : {v.date}
        </Text>
        ))}
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
            link={item.link}
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