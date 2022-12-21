import { Box } from "@chakra-ui/react";
import Layout from "../../src/components/Layout";
import AccountList from "../AccountList/AccountListDashboard";
import TokenChart from "../Chart";
import Dashboard from "./Dashboard";

export default function index() {
  return (
    <>
    <Layout>
      <Box pl={'2rem'}  h={'130vh'} bgColor={'#121826'}>
      <Dashboard/>
      <TokenChart/>
      <AccountList />
      </Box>
    </Layout>
    </>
  )
}
