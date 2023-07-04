import Image from 'next/image'
import Link from 'next/link'
import KeyIcon from './icons/KeyIcon'
import CustomersIcon from './icons/CustomersIcon'
import HelpIcon from './icons/HelpIcon'
import IncomeIcon from './icons/IncomIcon'
import ProductIcon from './icons/ProductIcon'
import PromoteIcon from './icons/PromoteIcon'
import ArrowIcon from './icons/ArrowIcon'
import cross from '../public/cross.svg'
import burger from '../public/burger.svg'
import evano from '../public/Evano.png'
import React, { useState } from 'react'

const Navbar = () => {

  const [btnLink, setBtnLink] = useState('/')

  const [navigation, setNavigation] = useState("w-[250px] xl:w-[306px] h-full absolute flex flex-col justify-between translate-x-[-250px] md:translate-x-[0px] md:static bg-white shadow pt-36 pb-20 xl:px-7 px-4 transition duration-1000 z-40")
  const [burgerClass, setBurgerClass] = useState("md:hidden block absolute top-[36px] right-[28px] z-20")
  const [crossClass, setCrossClass] = useState("md:hidden hidden absolute top-[35px] right-[30px] z-20")

  const btnActive = "flex items-center justify-between mb-[18px] xl:w-[250px] w-[218px] h-[46px] hover:bg-indigo-100 text-slate-400 rounded-lg p-[11px] transition duration-200"
  const btnInactive = "flex items-center justify-between mb-[18px] xl:w-[250px] w-[218px] h-[46px] bg-indigo-600 text-white rounded-lg p-[11px] transition duration-200"

  const burgerHendle = () => {
    setBurgerClass("md:hidden hidden absolute top-[36px] right-[28px] z-20")
    setCrossClass("md:hidden block absolute top-[35px] right-[30px] z-20")
    setNavigation("w-[250px] xl:w-[306px] h-full absolute flex flex-col justify-between translate-x-[0px] md:translate-x-[0px] md:static bg-white shadow pt-36 pb-20 xl:px-7 px-4 transition duration-1000 z-40")
  }

  const crossHendle = (h: any) => {
    setBurgerClass("md:hidden block absolute top-[36px] right-[28px] z-20")
    setCrossClass("md:hidden hidden absolute top-[35px] right-[30px] z-20")
    setNavigation("w-[250px] xl:w-[306px] h-full absolute flex flex-col justify-between translate-x-[-250px] md:translate-x-[0px] md:static bg-white shadow pt-36 pb-20 xl:px-7 px-4 transition duration-1000 z-40")
    setBtnLink(h)
  }

  return (
    <div>
      <div>
        <Image onClick={burgerHendle} className={burgerClass} src={burger} alt='Burger'/>
        <Image onClick={crossHendle} className={crossClass} src={cross} alt='Cross'/>
      </div>
      <nav className={navigation}>
        <div>
          <Link
            onClick={() => crossHendle("/")}
            className={ btnLink !== "/" ? btnActive : btnInactive }
            href="/">
            <div className="flex">
              <KeyIcon fill={ btnLink !== "/" ? "#9197B3" : "#ffffff" } />
              <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Dashboard</p>
            </div>
          </Link>
          <Link
            onClick={() => crossHendle("/product")}
            className={ btnLink !== "/product" ? btnActive : btnInactive }
            href="/product">
            <div className='flex'>
              <ProductIcon fill={ btnLink !== "/product" ? "#9197B3" : "#ffffff" } />
              <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Product</p>
            </div>
            <div>
              <ArrowIcon fill={ btnLink !== "/product" ? "#9197B3" : "#ffffff" } />
            </div>
          </Link>
          <Link
            onClick={() => crossHendle("/customers")}
            className={ btnLink !== "/customers" ? btnActive : btnInactive }
            href="/customers">
            <div className='flex'>
              <CustomersIcon fill={ btnLink !== "/customers" ? "#9197B3" : "#ffffff" } />
              <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Customers</p>
            </div>
            <div>
              <ArrowIcon fill={ btnLink !== "/customers" ? "#9197B3" : "#ffffff" } />
            </div>
          </Link>
          <Link
            onClick={() => crossHendle("/income")}
            className={ btnLink !== "/income" ? btnActive : btnInactive }
            href="/income">
            <div className='flex'>
              <IncomeIcon fill={ btnLink !== "/income" ? "#9197B3" : "#ffffff" } />
              <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Income</p>
            </div>
            <div>
              <ArrowIcon fill={ btnLink !== "/income" ? "#9197B3" : "#ffffff" } />
            </div>
          </Link>
          <Link
            onClick={() => crossHendle("/promote")}
            className={ btnLink !== "/promote" ? btnActive : btnInactive }
            href="/promote">
            <div className='flex'>
              <PromoteIcon fill={ btnLink !== "/promote" ? "#9197B3" : "#ffffff" } />
              <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Promote</p>
            </div>
            <div>
              <ArrowIcon fill={ btnLink !== "/promote" ? "#9197B3" : "#ffffff" } />
            </div>
          </Link>

          <Link
            onClick={() => crossHendle("/help")}
            className={ btnLink !== "/help" ? btnActive : btnInactive }
            href="/help">
            <div className='flex'>
              <HelpIcon fill={ btnLink !== "/help" ? "#9197B3" : "#ffffff" } />
              <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Help</p>
            </div>
            <div>
              <ArrowIcon fill={ btnLink !== "/help" ? "#9197B3" : "#ffffff" } />
            </div>
          </Link>
        </div>
        <div className="flex items-center">
          <Image src={evano} alt='Evano' width={42} height={42}/>
          <div className="ml-3">
            <p className="font-medium">Evano</p>
            <p className="text-[12px] text-neutral-500 font-normal">Project Manager</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar