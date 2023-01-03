import { Box } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from 'next/dynamic'
const BankReports = dynamic(() => import("./BankReports"));
const Layout = dynamic(() => import("../../src/components/Layout"));
const Timebar = dynamic(() => import("../../src/components/Timebar/Timebar"));

export default function index() {
  return (
    <>
    <Head>
        <title>Bank Reports-Proof AUM Apps</title>
        <meta name="description" content="Proof AUM Apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cfund.png" />
      </Head>
    <Layout>
      <Box h={'150vh'} bgColor={'#121826'} ml={{ base: '4rem', md: '4rem', lg: '2rem' }}>
        <Timebar />
        <BankReports/>
      </Box>
    </Layout>
    </>
  )
}
