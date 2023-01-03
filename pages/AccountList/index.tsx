import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../src/components/Layout";
import Timebar from "../../src/components/Timebar/Timebar";
import AccountList from "./AccountList";

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
