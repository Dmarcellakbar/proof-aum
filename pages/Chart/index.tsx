import React from 'react'
import dynamic from 'next/dynamic'

const TokenChart = dynamic(() => import("./TokenChart"));

export default function index() {
  return (
    <>
    <TokenChart />
    </>
  )
}
