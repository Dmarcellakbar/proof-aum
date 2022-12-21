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
  } from '@chakra-ui/react';
  import {
    FiHome,
    FiTrendingUp,
    FiCompass,
  } from 'react-icons/fi';
  import { IconType } from 'react-icons';
  import { ReactText } from 'react';
  import NextLink from 'next/link'
  import { Show } from '@chakra-ui/react'

  interface LinkItemProps {
    name: string;
    icon: IconType;
    route: string;
  }
  const LinkItems: Array<LinkItemProps> = [
    { name: 'Dashboard', icon: FiHome, route: 'Dashboard' },
    { name: 'Account List', icon: FiTrendingUp, route: 'AccountList' },
    { name: 'Bank Reports', icon: FiCompass, route: 'BankReports' },
  ];
  
  export default function index() {
    return (
      <>
        <Show breakpoint='(min-width: 800px)'>
          <Box pl={8} position={'fixed'} zIndex={1}>
            <Sidebar/>
          </Box>
        </Show>
        <Show breakpoint='(max-width: 800px)'>
          <Box pl={2} pr={5} position={'fixed'} zIndex={1}>
            <Mobilebar/>
          </Box>
        </Show>
      </>
    )
  }
  

function Sidebar() {
    return (
        <Box
          maxW={'242px'}
          color={'white'}
          bg={'#2A323E'}
          boxShadow={'2xl'}
          rounded={'24px'}
          p={6}
          >
            <List spacing={4}>
            {LinkItems.map((link) => (
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
                    <NavItem key={link.name} icon={link.icon} route={link.route}>
                    {link.name}
                    </NavItem>
                </ListItem>
            ))}
            </List>
        </Box>
    );
  }

  interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
    route: string;
  }
  const NavItem = ({ icon, children, route }: NavItemProps) => {
    return (
      <NextLink href={route} >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
      </NextLink>
    );
  };

  function Mobilebar() {
    
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
                <NavItem key={link.name} icon={link.icon} route={link.route}>
                {''}
                </NavItem>
            </ListItem>
        ))}
        </List>
    </Box>
    );
  }
  