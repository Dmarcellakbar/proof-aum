import Head from 'next/head'
import dynamic from 'next/dynamic'
const Login = dynamic(() => import("./Auth/Login"));
export default function Home() {
  return (
    <>
      <Head>
        <title>Login-Proof AUM Apps</title>
        <meta name="description" content="Proof AUM Apps" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cfund.png" />
      </Head>
      <Login/>
    </>
  )
}
