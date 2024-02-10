import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../util/Firebase'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
const Navbar = () => {
  const {currentUser}=useContext(AuthContext)
  return (
    <div className='flex shadow-lg bg-slate-600 p-2 h-12 justify-between text-white items-center'>
      <span className=' capitalize font-bold  text-lg '>Deepak Chat</span>
      <div className=' flex gap-3'>
        <img src={currentUser.photoURL} alt="logo" className=' object-cover bg-white h-6 w-6 rounded-full' />
        <span>{currentUser.displayName}</span>
      
       <span className=' border-none bg-indigo-500 text-white capitalize px-2 py-2 text-sm cursor-pointer' onClick={()=>signOut(auth)}>logout</span>
       
      </div>
    </div>
  )
}

export default Navbar