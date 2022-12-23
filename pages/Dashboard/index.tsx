import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../src/components/Layout";
import AccountList from "../AccountList/AccountListDashboard";
import TokenChart from "../Chart";
import Dashboard from "./Dashboard";

export default function index() {
  return (
    <>
    <Head>
        <title>Dashboard-Proof AUM Apps</title>
        <meta name="description" content="Proof AUM Apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cfund.png" />
      </Head>
    <Layout>
      <Box h={'auto'} bgColor={'#121826'} pb={'2rem'}>
      <Dashboard/>
      <TokenChart/>
      <Box mt={'2rem'} mb={'4rem'}>
      <AccountList />
      </Box>
      </Box>
    </Layout>
    </>
  )
}
