import { Box } from '@chakra-ui/react'
import React from 'react'

const Breadcrumb = ({child1, child2}: any) => {
  return (
    <>
    <Box>
    <ul className="breadcrumb">
      <li><a href={'/'+ child1}>{child1}</a></li>
      <li>{child2}</li>
    </ul>
    </Box>
    </>
  )
}

export default Breadcrumb