import { Box } from "@chakra-ui/react";
import Layout from "../../src/components/Layout";
import TokenChart from "../Chart/TokenChart";
import BankReports from "./BankReports";

export default function index() {
  return (
    <>
    <Layout>
      <Box mr={'10rem'}  h={'150vh'} bgColor={'#121826'}>
        <BankReports/>
      </Box>
    </Layout>
    </>
  )
}
