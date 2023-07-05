import Navbar from './Navbar'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

const Layout = ({ children }: any) => {
  return (
    <div className="bg-slate-50 flex h-[100vh]">

      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet"></link>
      </Head>
      
      <Navbar />

      <div className="my-28 mx-4 md:my-10 xl:ml-[70px] xl:mr-24 w-full">
        <h2 className="text-[24px] font-medium mb-12">Hello Evano 👋🏼,</h2>
        <section className="pt-[30px] pb-10 px-4 xl:px-10">
          {children}
        </section>
      </div>

    </div>
  )
}

export default Layout