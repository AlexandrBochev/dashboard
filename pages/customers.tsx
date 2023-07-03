import Image from 'next/image'
import searchIcon from '../public/search.svg'
import Data from '../Data.json'
import React, { useState, } from 'react'

const Customers = () => {

  const activeClass = "text-center mb-4 w-[80px] h-[30px] bg-[#16C09861] text-[#008767] border border-[#00B087] rounded m-auto py-1 px-3"
  const inactiveClass = "text-center mb-4 w-[80px] h-[30px] bg-red-200 text-red-600 border border-red-600 rounded m-auto py-1 px-3"

  return (
    <div>
      <div className="flex justify-between items-center mb-[28px]">
        <div>
          <h1>All Customers</h1>
          <p className="text-teal-500">Active Members</p>
        </div>
        <div>
          <Image src={searchIcon} alt='search' className="absolute my-[7px] mx-[8px]" />
          <input type="search" id="site-search" name="search" value='Search' className="w-[160px] sm:w-[216px] h-[38px] bg-slate-50 rounded-lg border px-10 text-gray-400 text-[12px]"></input>
        </div>
      </div>
      <span className="absolute left-0 top-[166px] bg-zinc-100 h-[1px] w-full"></span>
      <table className=" w-full table-auto border-separate border-spacing-y-4 text-left">
        <thead className="text-gray-400 text-[14px] font-medium">
          <tr>
            <th><p className="mb-2">Customer Name</p></th>
            <th><p className="mb-2">Company</p></th>
            <th><p className="mb-2">Phone Number</p></th>
            <th className="hidden sm:table-cell md:hidden lg:table-cell"><p className="mb-2">Email</p></th>
            <th className="hidden xl:table-cell"><p className="mb-2">Country</p></th>
            <th className="text-center hidden xl:table-cell"><p className="mb-2">Status</p></th>
          </tr>
        </thead>
        <tbody className="text-zinc-800 text-[14px] font-medium">
          {Data.map((d) => (   
            <tr key={d.ID}>
              <td className="border-b border-zinc-100"><p className="mb-4">{d.Name}</p></td>
              <td className="border-b border-zinc-100"><p className="mb-4">{d.Company}</p></td>
              <td className="border-b border-zinc-100"><p className="mb-4">{d.Phone}</p></td>
              <td className="border-b border-zinc-100 hidden sm:table-cell md:hidden lg:table-cell"><p className="mb-4">{d.Email}</p></td>
              <td className="border-b border-zinc-100 hidden xl:table-cell"><p className="mb-4">{d.Country}</p></td>
              <td className="border-b border-zinc-100 hidden xl:table-cell"><p className={d.Status === "Inactive" ? inactiveClass : activeClass}>{d.Status}</p></td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Customers