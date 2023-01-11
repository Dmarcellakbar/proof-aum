import { Box } from '@chakra-ui/react'
import React from 'react'

const Breadcrumb = ({children1, children2}: any) => {
  return (
    <>
    <Box>
    <ul className="breadcrumb">
      <li><a href={'/'+ children1}>{children1}</a></li>
      <li>{children2}</li>
    </ul>
    </Box>
    </>
  )
}

export default Breadcrumb