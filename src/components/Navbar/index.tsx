import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import Image from 'next/image'
import Cfund from '../../image/logocfund.png'
import NextLink from 'next/link'

export default function navbar() {
  return (
    <>
      <Box bg={'#2A323E'} px={4} zIndex={'1'} w={'100%'} position={'fixed'}>
        <Flex h={'80px'} alignItems={'center'} justifyContent={'space-between'}>
          <NextLink href={'/Dashboard'}>
            <Box w={'121.56px'}>
                <Image src={Cfund} alt={'cfundlogo'}/>
            </Box>
            </NextLink>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://bit.ly/broken-link'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Setting</MenuItem>
                <MenuDivider />
                <NextLink href={'/'}>
                <MenuItem>Log out</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}