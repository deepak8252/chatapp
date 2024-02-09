import React from 'react'

const Search = () => {
  return (
    <div className='border-b border-gray-900'>
   <div className=' p-3'>
    <input type="search" name="" id="" className=' bg-transparent border shadow-lg text-white px-3 py-2' placeholder='find the euser' />
   </div>
   <div className=' flex items-center gap-3 hover:bg-slate-900 text-white cursor-pointer capitalize border-b'>
    <img className='w-12 h-12 rounded-full object-cover' src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="" />
    <div className='userchatinfo'>
        <span>Deepak</span>
     </div>
   </div>
    </div>
  )
}

export default Search