import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AttachFileIcon from '@mui/icons-material/AttachFile';
const Input = () => {
  return (
    <div className=' h-12 bg-white p-3 flex justify-between'>
       <input type="text" className=' w-4/5 outline-none' placeholder='typing Something....' />
       <div className=' items-center cursor-pointer flex justify-between'>
       
        <input type="file" name="" id="file" style={{display:"none"}} />
        <label htmlFor="file">
        <AttachFileIcon/>
          <UploadFileIcon/>
        </label>
        <SendIcon className='bg-indigo-400 text-white p-1'/>
       </div>
    </div>
  )
}

export default Input