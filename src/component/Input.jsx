import React, { useContext, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db, storage } from '../util/Firebase';
import { v4 as uuid } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
const Input = () => {
  const {currentUser}=useContext(AuthContext);
  const {data}=useContext(ChatContext);
  const [text,setText]=useState("");
  const [img,setImg]=useState(null)
  
 const handleSend=async()=>{
   if(img){
    const storageRef = ref(storage, uuid());
    const uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        //  setError(error.message);
      },
      () => {
         getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await updateDoc(doc(db,"chats",data.chatId),{
            messages:arrayUnion({
                   id:uuid(),
                   text,
                   senderId:currentUser.uid,
                   date:Timestamp.now(),
                   img:downloadURL,
            })
          })
         });
      }
   );
   }
   else{
        await updateDoc(doc(db,"chats",data.chatId),{
          messages:arrayUnion({
                 id:uuid(),
                 text,
                 senderId:currentUser.uid,
                 date:Timestamp.now(),
          })
        })
   }
   setImg(null),
   setText("")
 }
  return (
    <div className=' h-12 bg-white p-3 flex justify-between'>
       <input type="text" className=' w-4/5 outline-none' placeholder='typing Something....' onChange={e=>setText(e.target.value)} />
       <div className=' items-center cursor-pointer flex justify-between'>
       
        <input type="file" name="" id="file" style={{display:"none"}} onChange={e=>setImg(e.target.files[0])}  />
        <label htmlFor="file">
        <AttachFileIcon/>
          <UploadFileIcon/>
        </label>
        <SendIcon onClick={handleSend} className='bg-indigo-400 text-white p-1' />
       </div>
    </div>
  )
}

export default Input