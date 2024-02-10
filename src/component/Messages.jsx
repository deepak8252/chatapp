import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext';

const Messages = ({message}) => {
  const {currentUser}=useContext(AuthContext);
  const {data}=useContext(ChatContext);
  return (
    
    <div>
      <div className=' bg-gray-200 p-3 flex gap-4 flex-row-reverse  text-white '>
      <div>
      <img className='w-12 h-12 rounded-full object-cover' src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="" />
       <span>just now</span>
      </div>
      <div className='flex items-center flex-col '>
         <h2 className='bg-indigo-500  text-gray-400 px-6 rounded-2xl py-2'>hello user </h2>
         <img className=' rounded-full object-cover' src="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png" alt="" />
      </div>
    </div>
    </div>
  )
}

export default Messages