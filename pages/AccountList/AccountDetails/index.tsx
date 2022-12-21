import { Box } from "@chakra-ui/react";
import Layout from "../../../src/components/Layout";
import AccountDetails from "./AccountDetails";
import AssetHolding from "./AssetHolding";

export default function index() {
  return (
    <Layout>
    <Box pl={'2rem'}  h={'150vh'} bgColor={'#121826'} pb={'2rem'}>
    <AccountDetails/>
    <AssetHolding />
    </Box>
    </Layout>
  )
}
