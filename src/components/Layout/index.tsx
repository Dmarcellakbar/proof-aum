import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { Show, Box } from '@chakra-ui/react'
import Mobilebar from "../Sidebar/Mobilebar";

export default function index({children}:any) {
  return (
    <Grid
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        bgColor={'#121826'}
        w={'full'}
        >
        <GridItem area={'header'}>
            <Navbar />
        </GridItem>
        <GridItem colSpan={1} pt={'6rem'} area={'nav'} w={'30%'}>
          <Show breakpoint='(min-width: 900px)'>
            <Box pl={8} position={'fixed'} zIndex={1} h={'150vh'} w={'242px'}>
              <Sidebar/>
            </Box>
          </Show>
          <Show breakpoint='(max-width: 900px)'>
            <Box pl={2} pr={5} position={'fixed'} zIndex={1} h={'150vh'}>
              <Mobilebar/>
            </Box>
          </Show>
        </GridItem>
        <GridItem colSpan={4} pl={'8rem'} pr={'2rem'} pt={'5rem'} area={'main'} w={'100%'}>
            {children}
        </GridItem>
        <GridItem area={'footer'}>
            Footer
        </GridItem>
    </Grid>
  )
}
