import { Box } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from 'next/dynamic'
const Breadcrumb = dynamic(() => import("../../src/components/Breadcrumb"));
const AccountList = dynamic(() => import("./AccountList"));
const Layout = dynamic(() => import("../../src/components/Layout"));
const Timebar = dynamic(() => import("../../src/components/Timebar/Timebar"));

export default function index() {
  return (
    <>
    <Head>
        <title>AccountList-Proof AUM Apps</title>
        <meta name="description" content="Proof AUM Apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cfund.png" />
      </Head>
    <Layout>
    <Box color={'white'} bgColor={'#121826'} h={'150vh'}>
        <Timebar />
        <Box ml={{base: '2rem', md: '1rem', lg: '1rem'}}>
        <Breadcrumb children2={'Account List'}/>
        </Box>
        <AccountList/>
      </Box>
    </Layout>
    </>
  )
}
