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
  import { ReactText, useState } from 'react';
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

export default function Sidebar() {
  const [active, setActive] = useState(null)
    return (
        <Box
          maxW={'242px'}
          color={'white'}
          bg={'#2A323E'}
          boxShadow={'2xl'}
          rounded={'24px'}
          p={6}
          >
            <List spacing={6}>
            {LinkItems.map((link: any) => (
              <NextLink href={link.route} >
                <ListItem 
                w={'100%'} 
                bgColor={'transparent'} 
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                    borderRadius: '6px',
                    }}
                cursor="pointer"
                fontSize="16px"
                my={'1rem'}
                className="cactus {{ (request()->is(link.route)) ? 'active' : '' }}"
                >
                  <HStack>
                    <Image src={link.icon} alt={''} />
                    <Text>{link.name}</Text>
                  </HStack>
                </ListItem>
                </NextLink>
            ))}
            </List>
        </Box>
    );
  }
