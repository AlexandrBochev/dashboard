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

  const [key, setKey] = useState("#9197B3")
  const [product, setProduct] = useState("#9197B3")
  const [customers, setCustomers] = useState("#9197B3")
  const [income, setIncome] = useState("#9197B3")
  const [promote, setPromote] = useState("#9197B3")
  const [help, setHelp] = useState("#9197B3")
  const [navigation, setNavigation] = useState("w-[250px] xl:w-[306px] h-full absolute flex flex-col justify-between translate-x-[-250px] md:translate-x-[0px] md:static bg-white shadow pt-36 pb-20 xl:px-7 px-4 transition duration-1000 z-40")
  const [burgerClass, setBurgerClass] = useState("md:hidden block absolute top-[36px] right-[28px] z-20")
  const [crossClass, setCrossClass] = useState("md:hidden hidden absolute top-[35px] right-[30px] z-20")

  const burgerHendle = (e: any) => {
    setBurgerClass("md:hidden hidden absolute top-[36px] right-[28px] z-20")
    setCrossClass("md:hidden block absolute top-[35px] right-[30px] z-20")
    setNavigation("w-[250px] xl:w-[306px] h-full absolute flex flex-col justify-between translate-x-[0px] md:translate-x-[0px] md:static bg-white shadow pt-36 pb-20 xl:px-7 px-4 transition duration-1000 z-40")
  }

  const crossHendle = (e: any) => {
    setBurgerClass("md:hidden block absolute top-[36px] right-[28px] z-20")
    setCrossClass("md:hidden hidden absolute top-[35px] right-[30px] z-20")
    setNavigation("w-[250px] xl:w-[306px] h-full absolute flex flex-col justify-between translate-x-[-250px] md:translate-x-[0px] md:static bg-white shadow pt-36 pb-20 xl:px-7 px-4 transition duration-1000 z-40")
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
            onFocus={() => setKey("#ffffff")} onBlur={() => setKey("#9197B3")} onClick={crossHendle}
            className="flex mb-[18px] xl:w-[250px] w-[218px] h-[46px] hover:bg-indigo-100 hover:scale-[102%] active:scale-[98%] focus:bg-indigo-600 focus:text-white text-slate-400 rounded-lg p-[11px] transition duration-200" href="/">
            <KeyIcon fill={key} />
            <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Dashboard</p>
          </Link>
          <Link
            onFocus={() => setProduct("#ffffff")} onBlur={() => setProduct("#9197B3")} onClick={crossHendle}
            className="flex items-center justify-between mb-[18px] xl:w-[250px] w-[218px] h-[46px] hover:bg-indigo-100 hover:scale-[102%] active:scale-[98%] focus:bg-indigo-600 focus:text-white text-slate-400 rounded-lg p-[11px] transition duration-200" href="/product">
            <div className='flex'>
              <ProductIcon fill={product} />
              <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Product</p>
            </div>
            <div>
              <ArrowIcon fill={product} />
            </div>
          </Link>
          <Link
            onFocus={() => setCustomers("#ffffff")} onBlur={() => setCustomers("#9197B3")} onClick={crossHendle}
            className="flex items-center justify-between mb-[18px] xl:w-[250px] w-[218px] h-[46px] hover:bg-indigo-100 hover:scale-[102%] active:scale-[98%] focus:bg-indigo-600 focus:text-white text-slate-400 rounded-lg p-[11px] transition duration-200" href="/customers">
            <div className='flex'>
              <CustomersIcon fill={customers} />
              <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Customers</p>
            </div>
            <div>
              <ArrowIcon fill={customers} />
            </div>
          </Link>
          <Link
            onFocus={() => setIncome("#ffffff")} onBlur={() => setIncome("#9197B3")} onClick={crossHendle}
            className="flex items-center justify-between mb-[18px] xl:w-[250px] w-[218px] h-[46px] hover:bg-indigo-100 hover:scale-[102%] active:scale-[98%] focus:bg-indigo-600 focus:text-white text-slate-400 rounded-lg p-[11px] transition duration-200" href="/income">
            <div className='flex'>
              <IncomeIcon fill={income} />
              <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Income</p>
            </div>
            <div>
              <ArrowIcon fill={income} />
            </div>
          </Link>
          <Link
            onFocus={() => setPromote("#ffffff")} onBlur={() => setPromote("#9197B3")} onClick={crossHendle}
            className="flex items-center justify-between mb-[18px] xl:w-[250px] w-[218px] h-[46px] hover:bg-indigo-100 hover:scale-[102%] active:scale-[98%] focus:bg-indigo-600 focus:text-white text-slate-400 rounded-lg p-[11px] transition duration-200" href="/promote">
            <div className='flex'>
              <PromoteIcon fill={promote} />
              <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Promote</p>
            </div>
            <div>
              <ArrowIcon fill={promote} />
            </div>
          </Link>
          <Link
            onFocus={() => setHelp("#ffffff")} onBlur={() => setHelp("#9197B3")} onClick={crossHendle}
            className="flex items-center justify-between mb-[18px] xl:w-[250px] w-[218px] h-[46px] hover:bg-indigo-100 hover:scale-[102%] active:scale-[98%] focus:bg-indigo-600 focus:text-white text-slate-400 rounded-lg p-[11px] transition duration-200" href="/help">
            <div className='flex'>
              <HelpIcon fill={help} />
              <p className="text-[14px] font-medium ml-[14px] mt-[2px]">Help</p>
            </div>
            <div>
              <ArrowIcon fill={help} />
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