import Image from 'next/image'
import searchIcon from '../public/search.svg'
import Data from '../Data.json'
import React, { useState, } from 'react'
import Link from 'next/link'

const Customers = () => {
  
  const activeClass = "text-center mb-4 w-[80px] h-[30px] bg-[#16C09861] text-[#008767] border border-[#00B087] rounded m-auto py-1 px-3"
  const inactiveClass = "text-center mb-4 w-[80px] h-[30px] bg-red-200 text-red-600 border border-red-600 rounded m-auto py-1 px-3"

  const pgInactiveClass = "w-6 h-6 flex justify-center items-center mr-3 bg-neutral-100 rounded border border-[#eeeeee] text-gray-700 text-[12px] font-medium hover:bg-indigo-100 hover:border-indigo-100"
  const pgActiveClass = "w-6 h-6 flex justify-center items-center mr-3 bg-indigo-600 rounded border border-indigo-600 text-white text-[12px] font-medium"

  const [post, setPost] = useState(Data)
  const [changeStatus, setChangeStatus] = useState("Active Members")

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 8
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = post.slice(firstIndex, lastIndex)
  const npage = Math.ceil(post.length / recordsPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  const Filter =(e: any) => {
    setPost(Data.filter((f) => 
      f.Name.toLowerCase().includes(e.target.value) ||
      f.Company.toLowerCase().includes(e.target.value) ||
      f.Phone.toLowerCase().includes(e.target.value) ||
      f.Email.toLowerCase().includes(e.target.value) ||
      f.Country.toLowerCase().includes(e.target.value)
    ))
  }

  const statusActive = () => {
    if (changeStatus === "Active Members") {
      setChangeStatus("All Members")
      setPost(Data.filter(f => f.Status.includes("Active")))
    } else {
      setChangeStatus("Active Members")
      setPost(Data)
    }
  }

  const prePage = (e: any) => {
    e.preventDefault()
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = (e: any) => {
    e.preventDefault()
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }

  const changeCPage = (id: number) => {
    setCurrentPage(id)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-[28px]">
        <div>
          <h1>All Customers</h1>
          <p className="text-teal-500 hover:text-teal-300 cursor-pointer" onClick={statusActive}>{changeStatus}</p>
        </div>
        <div>
          <Image src={searchIcon} alt='search' className="absolute my-[7px] mx-[8px]" />
          <input type="text" placeholder='Search' onChange={Filter} className="w-[160px] sm:w-[216px] h-[38px] bg-slate-50 rounded-lg border px-10 text-gray-400 text-[12px]"></input>
        </div>
      </div>
      <span className="absolute left-0 top-[166px] bg-zinc-100 h-[1px] w-full"></span>
      <table className=" w-full table-auto border-separate border-spacing-y-4 text-left mb-3">
        <thead className="text-gray-400 text-[12px] sm:text-[14px] font-medium">
          <tr>
            <th><p className="mb-2">Customer Name</p></th>
            <th><p className="mb-2">Company</p></th>
            <th><p className="mb-2">Phone Number</p></th>
            <th className="hidden sm:table-cell md:hidden lg:table-cell"><p className="mb-2">Email</p></th>
            <th className="hidden xl:table-cell"><p className="mb-2">Country</p></th>
            <th className="text-center hidden xl:table-cell"><p className="mb-2">Status</p></th>
          </tr>
        </thead>
        <tbody className="text-zinc-800 text-[12px] sm:text-[14px] font-medium">
          {records.map((d) => (   
            <tr key={d.id}>
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
      <div className="flex flex-col lg:flex-row justify-between items-center px-auto">
        <p className="text-gray-400 mb-4 lg:mb-0">Showing data { firstIndex === 0 ? 1 : firstIndex } to { lastIndex > post.length ? post.length : lastIndex} of { post.length } entries</p>
        <nav>
          <ul className="flex">
            <li>
              <Link href="#" onClick={prePage}className={pgInactiveClass}>&lt;</Link>
            </li>
            { numbers.map((n, i) => (
              <li key={i}>
                <Link href="#" onClick={(e) => { e.preventDefault(); changeCPage(n) }} className={ n === currentPage ? pgActiveClass : pgInactiveClass }>{n}</Link>
              </li>
            )) }
            <li>
              <Link href="#" onClick={nextPage} className={pgInactiveClass}>&gt;</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Customers