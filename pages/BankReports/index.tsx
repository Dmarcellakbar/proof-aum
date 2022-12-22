import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../src/components/Layout";
import TokenChart from "../Chart/TokenChart";
import BankReports from "./BankReports";

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
      <Box px={'2rem'} h={'150vh'} bgColor={'#121826'}>
        <BankReports/>
      </Box>
    </Layout>
    </>
  )
}
