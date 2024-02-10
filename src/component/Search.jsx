import  { useContext, useState } from 'react'
import { collection, doc, getDoc, getDocs, query,  serverTimestamp,  setDoc,  updateDoc,  where } from "firebase/firestore";
import { db } from '../util/Firebase';
import { AuthContext } from '../context/AuthContext';
const Search = () => {
  const [userName,setUserName]=useState("");
  const [user,setUser]=useState(null);
  const [error,setError]=useState(false);
  const {currentUser}=useContext(AuthContext)
  const handleInput=(e)=>{
    setUserName(e.target.value);
    console.log(e.target.value);
  }
  const handleSearch=async()=>{
    const q=query(collection(db,"users"),where("displayName","==",userName));
 try{
  const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {

 setUser(doc.data());
});

 }
 catch(err){
  setError(true);
 }

  }
  const handleKeyDown=(e)=>{
  e.code==="Enter" &&  handleSearch();
  }
  const userSelect=async()=>{
    const combinedId=currentUser.uid> user.uid? +currentUser.uid+user.uid: user.uid+currentUser.uid;
    try{
      const res=await getDoc(doc(db,"chats",combinedId));
      if(!res.exists()){
        await setDoc(doc(db,"chats",combinedId),{messages:[]});
        await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combinedId+".userinfo"]:{
            uid:user.uid,
            displayName:user.displayName,
            photoUrl:user.photoURL,
          },
          [combinedId+".date"]:serverTimestamp()
        });

        await updateDoc(doc(db,"userChats",currentUser.uid),{
          [combinedId+".userinfo"]:{
            uid:currentUser.uid,
            displayName:currentUser.displayName,
            photoUrl:currentUser.photoURL,
          },
          [combinedId+".date"]:serverTimestamp()
        });
      }
    }
    catch(err){
      console.log(err);
    }
    setUser(null)
    setUserName("");
 
  }
  return (
    <div className='border-b border-gray-900'>
   <div className=' p-3'>
    <input type="search" name="" id="" className=' bg-transparent border shadow-lg text-white px-3 py-2' placeholder='find the euser' onKeyDown={handleKeyDown} onChange={handleInput}  value={userName}/>
   </div>
   {
    error && <span>user not found</span>
   }
   {
    user && <div onClick={userSelect} className=' flex items-center gap-3 hover:bg-slate-900 text-white cursor-pointer capitalize border-b'>
    <img className='w-12 h-12 rounded-full object-cover ' src={user.photoUrl} alt="" />
    <div className='userchatinfo'>
        <span>{user.displayName}</span>
     </div>
   </div>
   }
    </div>
  )
}

export default Search