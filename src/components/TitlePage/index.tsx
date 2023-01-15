import { chakra } from '@chakra-ui/react'
import React from 'react'

export default function Titlepage({child1}: any) {
  return (
    <chakra.h1
    textAlign={'left'}
    fontSize={'24px'}
    fontWeight={'700'}>
  {child1}
  </chakra.h1>
  )
}
