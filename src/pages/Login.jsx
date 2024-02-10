import { Link, useNavigate} from 'react-router-dom'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../util/Firebase';
import { useState } from 'react';

const Login = () => {
  const [error,setError]=useState(false);
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const email = e.target[0].value;
    const password = e.target[1].value;
   

    try {
      await signInWithEmailAndPassword(auth, email, password);
    navigate("/")
  
     
    } catch (error) {
       setError(error.message);
    }
 };
  return (
    <div>
         <div className="formContainer flex justify-center items-center bg-indigo-400 h-screen">
            <div className="formWrap flex flex-col gap-4 rounded-xl bg-white py-10 px-10 ">
               <span className="logo text-center font-bold text-indigo-500 text-3xl">Deepak Chat</span>
               <span className="title text-center font-semibold text-indigo-500 text-2xl">Sign In</span>
               <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4" >
                  <input type="email" placeholder="Email" className="border-indigo-500 border-b-2 rounded-lg py-2 px-3" />
                  <input type="password" placeholder="Enter Password" className="border-indigo-500 border-b-2 rounded-lg py-2 px-3" />
                 
                  <button className="bg-indigo-500 text-white py-3 rounded-lg text-lg" >Sign in</button>
                   {error && <span>{error}</span>}
                 <Link to="/register"> <p className="cursor-pointer">you are a new user ! register now </p></Link>
               </form>
            </div>
         </div>
    </div>
  )
}

export default Login