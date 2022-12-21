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
    Spacer
  } from '@chakra-ui/react';
  import { IconType } from 'react-icons';
  import DataAccount  from './DataAccount';
  import NextLink from 'next/link'
import UpdateData from '../Dashboard/UpdateData';

  interface StatsCardProps {
    title: string;
    stat: string;
    icon: IconType;
    asset: string;
    token: string;
    link: string;
  }
  
  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon, asset, token, link } = props;
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
              <Icon
                mr="4"
                fontSize="16"
                as={icon}
              />
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
      <Box bgColor={'#121826'} color={'white'} maxW="7xl" >
        {UpdateData().map((v: any) => (
        <Text
            textAlign={'right'}
            fontSize={'16px'}
            fontWeight={'700'}
            pt={'2rem'}>
        Last update : {v.name}
        </Text>
        ))}
        <chakra.h1
          textAlign={'left'}
          fontSize={'24px'}
          fontWeight={'700'}
          pb={'1rem'}>
        Account List
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
        {DataAccount().map((item: any) => (
          <StatsCard
            link={item.link}
            title={item.title}
            stat={item.stat}
            icon={item.icon}
            asset={item.asset}
            token={item.token}
          />
        ))}
        </SimpleGrid>
      </Box>
    );
  }