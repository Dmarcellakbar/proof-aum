import { Box } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from 'next/dynamic'
const AccountList = dynamic(() => import("./AccountList"), {
  suspense: true,
});
const Layout = dynamic(() => import("../../src/components/Layout"), {
  suspense: true,
});
const Timebar = dynamic(() => import("../../src/components/Timebar/Timebar"), {
  suspense: true,
});

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
      <Box h={'150vh'} bgColor={'#121826'} mb={'10rem'}>
        <Timebar />
        <AccountList/>
      </Box>
    </Layout>
    </>
  )
}
