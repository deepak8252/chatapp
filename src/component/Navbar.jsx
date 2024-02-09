import React from 'react'
const Navbar = () => {
  return (
    <div className='flex shadow-lg bg-slate-600 p-2 h-12 justify-between text-white items-center'>
      <span className=' capitalize font-bold  text-lg '>Deepak Chat</span>
      <div className=' flex gap-3'>
        <img src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="logo" className=' object-cover bg-white h-6 w-6 rounded-full' />
        <span>Deepak</span>
        <span className=' border-none bg-indigo-500 text-white capitalize px-2 py-2 text-sm'>logout</span>
      </div>
    </div>
  )
}

export default Navbar