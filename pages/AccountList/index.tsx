import { Box } from "@chakra-ui/react";
import Layout from "../../src/components/Layout";
import AccountList from "./AccountList";

export default function index() {
  return (
    <Layout>
      <Box pl={'2rem'} h={'100vh'} bgColor={'#121826'}>
        <AccountList/>
      </Box>
    </Layout>
  )
}
