import { BsGraphDown } from "react-icons/bs"
import { FaRegBookmark, FaRegUser } from "react-icons/fa"
import { MdOutlineReviews } from "react-icons/md"
import { TbDeviceSpeaker } from "react-icons/tb"

export default function AdminPage(){
    return(
    <div className="w-full h-screen flex"> 
        <div className='w-[400px] h-full bg-green-200'>
    
          <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center bg-red-400' ><BsGraphDown />
            Dashboard
          </button>
          <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' >
            <FaRegBookmark/>
            Bookings
          </button>
          <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' >
            <TbDeviceSpeaker />
            Items
          </button>
          <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' >
            <MdOutlineReviews/>
            Reviews
          </button>
          <button className='w-full h-[40px] text-[25px] font-bold flex justify-center items-center' >
            <FaRegUser/>
            Users
          </button>
    
            </div>
        <div className='w-full bg-red-900' >
        </div>
        </div>
    )
}