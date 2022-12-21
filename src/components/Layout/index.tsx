import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function index({children}:any) {
  return (
    <Grid
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        bgColor={'#121826'}
        >
        <GridItem area={'header'}>
            <Navbar />
        </GridItem>
        <GridItem colSpan={1} pt={'6rem'} area={'nav'}>
           <Sidebar/>
        </GridItem>
        <GridItem colSpan={4} pl={'10rem'} pt={'5rem'} area={'main'}>
            {children}
        </GridItem>
        <GridItem area={'footer'}>
            Footer
        </GridItem>
    </Grid>
  )
}
