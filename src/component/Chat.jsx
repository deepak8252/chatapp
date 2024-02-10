import VideoChatIcon from '@mui/icons-material/VideoChat';
import AddIcon from '@mui/icons-material/Add';
import MoreIcon from '@mui/icons-material/More';
import Messagess from './Messagess';
import Input from "./Input"
import {  useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
const Chat = () => {
  const{data}=useContext(ChatContext)
  return (
    <div className=" lg:w-3/5 md:w-3/5 sm:w-full ">
      <div className=' text-gray-300 h-12 bg-indigo-400 flex items-center justify-between px-4'>
        <span>{data.user?.displayName}</span>
        <div className='flex gap-4 cursor-pointer'>
           <VideoChatIcon/>
          <AddIcon/>
          <MoreIcon/>
        </div>
      </div>
     
      <Messagess/>
      <Input/>
      
    </div>
  )
}

export default Chat