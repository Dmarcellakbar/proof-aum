import React from 'react'
import dynamic from 'next/dynamic'

const TokenChart = dynamic(() => import("./TokenChart"), {
  suspense: true,
});

export default function index() {
  return (
    <>
    <TokenChart />
    </>
  )
}
