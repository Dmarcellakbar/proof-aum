import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../../src/components/Layout";
import AccountDetails from "./AccountDetails";
import AssetHolding from "./AssetHolding";

export default function index() {
  return (
    <>
    <Head>
        <title>AccountDetails-Proof AUM Apps</title>
        <meta name="description" content="Proof AUM Apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cfund.png" />
      </Head>
    <Layout>
    <Box h={'150vh'} bgColor={'#121826'} pb={'2rem'} ml={{ base: '4rem', md: '2rem', lg: 0 }} mr={{ base: 0, md: 0, lg: '4rem' }}>
    <AccountDetails/>
    <AssetHolding />
    </Box>
    </Layout>
    </>
  )
}
