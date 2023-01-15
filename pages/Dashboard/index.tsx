import Head from "next/head";
import dynamic from 'next/dynamic'
import { Box } from "@chakra-ui/react";
const AccountList = dynamic(() => import("../AccountList/AccountList"));
const Dashboard = dynamic(() => import("./Dashboard"));
const Layout = dynamic(() => import("../../src/components/Layout"));

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
      <Dashboard/>
    </Layout>
    </>
  )
}
