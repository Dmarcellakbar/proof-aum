import {
    Box,
    Center,
    Button,
    VStack,
    FlexProps,
    Icon,
    List,
    ListItem,
    Flex,
    HStack,
    Text
  } from '@chakra-ui/react';
  import { IconType } from 'react-icons';
  import { ReactText } from 'react';
  import NextLink from 'next/link'
  import { Show } from '@chakra-ui/react'
  import Homeicon from '../../icons/home-2.png'
  import Accounticon from '../../icons/wallet-money.png'
  import Reporticon from '../../icons/bank.png'
  import Image from 'next/image'

  interface LinkItemProps {
    name: string;
    icon: any;
    route: string;
  }
  const LinkItems: Array<LinkItemProps> = [
    { name: 'Dashboard', icon: Homeicon, route: '/Dashboard' },
    { name: 'Account List', icon: Accounticon, route: '/AccountList' },
    { name: 'Bank Reports', icon: Reporticon, route: '/BankReports' },
  ];
  
export default function Mobilebar() {
    
    return (
      <Box
      maxW={'60px'}
      color={'white'}
      bg={'#2A323E'}
      boxShadow={'2xl'}
      rounded={'24px'}
      p={3}
      >
        <List spacing={4}>
        {LinkItems.map((link) => (
          <NextLink href={link.route}>
            <ListItem 
            w={'100%'} 
            bgColor={'transparent'} 
            p='6px'
            _hover={{
                bg: 'cyan.400',
                color: 'white',
                borderRadius: '12px',
                }}
            cursor="pointer"
            fontSize="16px">
                <HStack>
                    <Image src={link.icon} alt={''} />
                </HStack>
            </ListItem>
            </NextLink>
        ))}
        </List>
    </Box>
    );
  }
  