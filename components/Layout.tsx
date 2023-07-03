import Navbar from './Navbar'
import Logo from '../public/logo.svg'
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

      <Link className="absolute top-8 left-4 xl:left-7 flex items-center z-50" href="/">
        <Image src={Logo} alt="Dashboard Logo" />
        <p className="text-[26px] font-poppins font-semibold ml-2 mr-1 mt-[2px]">Dashboard</p>
        <p className="text-[10px] font-medium text-zinc-500 mt-3">v.01</p>
      </Link>
      
      <Navbar />

      <div className="my-28 mx-4 md:my-10 xl:ml-[70px] xl:mr-24 w-full">
        <h2 className="text-[24px] font-medium mb-12">Hello Evano 👋🏼,</h2>
        <section>
          {children}
        </section>
      </div>

    </div>
  )
}

export default Layout