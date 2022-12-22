import { Box } from "@chakra-ui/react";
import Layout from "../../src/components/Layout";
import TokenChart from "../Chart/TokenChart";
import BankReports from "./BankReports";
import Coba from "./Coba";

export default function index() {
  return (
    <>
    <Layout>
      <Box px={'2rem'} h={'150vh'} bgColor={'#121826'}>
        <BankReports/>
      </Box>
      {/* <Coba /> */}
    </Layout>
    </>
  )
}
