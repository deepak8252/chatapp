import { onAuthStateChanged } from "firebase/auth";
import {  createContext, useEffect, useState } from "react";
import { auth } from "../util/Firebase";

export const ChatContext=createContext();

export const AuthContextProvider=({children})=>{
const [currentUser,setCurrentUser]=useState({});

useEffect(()=>{
    const unsub=  onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user);
        console.log(user)
      })
       return ()=>{unsub()};
},[]);
 return (
  <ChatContext.Provider value={{currentUser}}>
{children};
</ChatContext.Provider> 
 )
}