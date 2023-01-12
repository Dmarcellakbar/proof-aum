import Link from "next/link"
import { useRouter } from 'next/router';
import { HStack, Icon, Text } from "@chakra-ui/react";
import {RiHome5Fill, RiBankFill} from 'react-icons/ri'
import {IoMdWallet} from 'react-icons/io'
import { Show } from '@chakra-ui/react'

  export default function Route() {
    const router = useRouter();
    const currentRoute = router.pathname;
    return (
      <>
        <Link href='/Dashboard' 
        className={currentRoute === '/Dashboard' ? 'active' : 'nonActive'}>
        <HStack
        _hover={{
          bg: 'cyan.400',
          color: 'white',
          borderRadius: '12px',
          }}
      cursor="pointer"
      mb={2}>
          {/* <Image src={Homeicon} alt={''} /> */}
          <Icon as={RiHome5Fill} w={'24px'} h={'24px'}/>
          <Show breakpoint='(min-width: 900px)'>
            <Text>Dashboard</Text>
          </Show>
        </HStack>
      </Link>

      <Link
        href='/AccountList'
        className={currentRoute === '/AccountList' ? 'active': 'nonactive' }
      >
         <HStack
         _hover={{
          bg: 'cyan.400',
          color: 'white',
          borderRadius: '12px',
          }}
      cursor="pointer"
      mb={2}>
          <Icon as={IoMdWallet} w={'24px'} h={'24px'}/>
          <Show breakpoint='(min-width: 900px)'>
          <Text>Account Lists</Text>
          </Show>
        </HStack>
      </Link>

      <Link
        href='/BankReports'
        className={currentRoute === '/BankReports' ? 'active' : 'nonActive'}
      >
        <HStack
        _hover={{
          bg: 'cyan.400',
          color: 'white',
          borderRadius: '12px',
          }}
      cursor="pointer">
          <Icon as={RiBankFill} w={'24px'} h={'24px'}/>
          <Show breakpoint='(min-width: 900px)'>
            <Text>Bank Reports</Text>
          </Show>
        </HStack>
      </Link>
      </>
    );
  }
