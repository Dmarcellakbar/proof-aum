import { Box } from "@chakra-ui/react";
import Layout from "../../src/components/Layout";
import AccountList from "../AccountList/AccountListDashboard";
import TokenChart from "../Chart";
import Dashboard from "./Dashboard";

export default function index() {
  return (
    <>
    <Layout>
      <Box h={'150vh'} bgColor={'#121826'} pb={'2rem'}>
      <Dashboard/>
      <TokenChart/>
      <AccountList />
      </Box>
    </Layout>
    </>
  )
}
