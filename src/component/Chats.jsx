import  { useContext, useEffect, useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import {db }from "../util/Firebase";
import {AuthContext} from "../context/AuthContext"
import { ChatContext } from '../context/ChatContext';
const Chats = () => {
  const [chats,setChats]=useState([]);
  const {currentUser}=useContext(AuthContext);
  const {dispatch}=useContext(ChatContext);
  
  useEffect(()=>{
  const getsChats=()=>{
    const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      console.log("Current data: ", doc.data());
      setChats(doc.data())
  });
  return()=>{
    unsub()
  };
  };
  currentUser.uid && getsChats()
  },[currentUser.uid])
 
const handleSelect=(u)=>{
  dispatch({type:"CHANGE_USER",payload:u})
}
  return (
    <div>
       {
        Object.entries(chats)?.map((item)=>(
              <div key={item[0]} onClick={()=>handleSelect(item[1].userinfo)}>
               <div className=' flex items-center gap-3 hover:bg-slate-900 text-white cursor-pointer capitalize border-b'>
    <img className='w-12 h-12 rounded-full object-cover' src={item[1]?.userinfo?.photoUrl} alt="hghg" />
    <div className='userchatinfo'>
        <span className='font-bold text-lg'>{item[1]?.userinfo?.displayName}</span>
        <p className='text-sm text-gray-400'>{item[1].lastmessage?.text}</p>
     </div>
   </div>
              </div>
        ))
       }
     
   

  
    </div>
  )
}

export default Chats