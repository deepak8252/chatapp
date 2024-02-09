import Sidebar from "../component/Sidebar"
import Chat from "../component/Chat"
const Home = () => {
  return (
    <div className=" bg-indigo-300 h-screen flex justify-center items-center">
        <div className=" overflow-hidden border-white border flex-wrap flex  w-4/6 rounded-lg">
        <Sidebar/>
        <Chat/>
        </div>
    </div>
  )
}

export default Home