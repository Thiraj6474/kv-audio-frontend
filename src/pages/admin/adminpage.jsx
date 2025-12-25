import { BsGraphDown } from "react-icons/bs"
import { FaRegBookmark, FaRegUser } from "react-icons/fa"
import { MdOutlineReviews } from "react-icons/md"
import { TbDeviceSpeaker } from "react-icons/tb"
import { Link, Route, Routes } from "react-router-dom"

export default function AdminPage(){
    return(
    <div className="w-full h-screen flex"> 
        <div className='w-[400px] h-full bg-green-200'>
    
          <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center bg-red-400' ><BsGraphDown />
            Dashboard
          </button>

          <Link to="/admin/booking" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' >
            <FaRegBookmark/>
            Bookings
          </Link>

          <Link to="/admin/items" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' >
            <TbDeviceSpeaker />
            Items
          </Link>

          <Link to="/admin/reviews" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' >
            <MdOutlineReviews/>
            Reviews
          </Link>

          <Link to="/admin/users" className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' >
            <FaRegUser/>
            Users
          </Link>
    
            </div>
        <div className='w-[calc(100vw-400px)] bg-blue-900'>

          <Routes path="/*">
            <Route path="/booking" element={<h1>Bookings</h1>}/>
            <Route path="/items" element={<h1>Items</h1>}/>
            <Route path="/reviews" element={<h1>Reviews</h1>}/>
            <Route path="/users" element={<h1>Users</h1>}/>
          </Routes>

        </div>
        </div>
    )
}