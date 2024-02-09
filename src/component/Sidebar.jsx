import React from 'react'
import Navbar from './Navbar'
import Search from "./Search"
import Chats from "./Chats"
const Sidebar = () => {
  return (
    <div className='lg:2/5 sm:w-full md:w-2/5 border border-indigo-300  bg-slate-800'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar