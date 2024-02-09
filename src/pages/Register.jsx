import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth,db,storage} from "../util/Firebase"
import { useState } from "react";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
const avtar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3UGUnq-zn46XlfZxH1Y7MAYDaCfnQwvDjjT3iPH4TA&s";

const Register = () => {
   const [error, setError] = useState("");
   const navigate=useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();
      const displayName = e.target[0].value;
      const email = e.target[1].value;
      const password = e.target[2].value;
      const file = e.target[3].files[0];

      try {
         const res = await createUserWithEmailAndPassword(auth, email, password);
         const storageRef = ref(storage, displayName);
         const uploadTask = uploadBytesResumable(storageRef, file);

         uploadTask.on(
            "state_changed",
            null,
            (error) => {
               setError(error.message);
            },
            () => {
               getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
                  await updateProfile(res.user, {
                     displayName,
                     photoURL: downloadURL,
                  });

                  await setDoc(doc(db, "users", res.user.uid), {
                     uid: res.user.uid,
                     displayName,
                     email,
                     photoURL: downloadURL,
                  });
                  await setDoc(doc(db,"userChats",res.user.uid),{})
                  navigate("/home");
               });
            }
         );
       
      } catch (error) {
         setError(error.message);
      }
   };

   return (
      <div>
         <div className="formContainer flex justify-center items-center bg-indigo-400 h-screen">
            <div className="formWrap flex flex-col gap-4 rounded-xl bg-white py-10 px-10 ">
               <span className="logo text-center font-bold text-indigo-500 text-3xl">Deepak Chat</span>
               <span className="title text-center font-semibold text-indigo-500 text-2xl">Register</span>
               <form action="" className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Display Name" className="border-indigo-500 border-b-2 rounded-lg py-2 px-3"/>
                  <input type="email" placeholder="Email" className="border-indigo-500 border-b-2 rounded-lg py-2 px-3" />
                  <input type="password" placeholder="Enter Password" className="border-indigo-500 border-b-2 rounded-lg py-2 px-3" />
                  <input type="file" id="file" onChange={() => {}} style={{display: "none"}}/>
                  <label htmlFor="file" className="flex cursor-pointer capitalize justify-center items-center">
                     <img src={avtar} alt="Avatar" className="w-16 px-2" />
                     <span>Add Avatar</span>
                  </label>
                  <button className="bg-indigo-500 text-white py-3 rounded-lg text-lg">Register</button>
                  {error && <span>{error}</span>}
                  <p className="cursor-pointer" onClick={navigate("/login")}>Already have an account? Login</p>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Register;
