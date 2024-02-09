import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
  return (
    <div>
         <div className="formContainer flex justify-center items-center bg-indigo-400 h-screen">
            <div className="formWrap flex flex-col gap-4 rounded-xl bg-white py-10 px-10 ">
               <span className="logo text-center font-bold text-indigo-500 text-3xl">Deepak Chat</span>
               <span className="title text-center font-semibold text-indigo-500 text-2xl">Sign In</span>
               <form action="" className="flex flex-col gap-4" >
                  <input type="email" placeholder="Email" className="border-indigo-500 border-b-2 rounded-lg py-2 px-3" />
                  <input type="password" placeholder="Enter Password" className="border-indigo-500 border-b-2 rounded-lg py-2 px-3" />
                 
                  <button className="bg-indigo-500 text-white py-3 rounded-lg text-lg">Sign in</button>
                  
                  <p className="cursor-pointer" onClick={navigate("/")}>you are a new user ! register now </p>
               </form>
            </div>
         </div>
    </div>
  )
}

export default Login