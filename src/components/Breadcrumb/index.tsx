import { Box } from '@chakra-ui/react'
import React from 'react'
import ComponentBreadcrumb from './Breadcrumb'
const Breadcrumb = ({children1, children2}: any) => {
  return (
    <>
    <Box>
    <ComponentBreadcrumb child1={children1} child2={children2}/>
    </Box>
    </>
  )
}

export default Breadcrumb