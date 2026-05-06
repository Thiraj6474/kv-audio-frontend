import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import ProductCard from "../../components/productCard"

export default function Items(){
    const [state,setState] = useState("loading") //loading ,success,error
    const [items,setItems] = useState([])
    useEffect(()=>{
        if(state == "loading"){
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products`)
        .then((res)=>{
            console.log(res.data)
            setItems(res.data)
            setState("success")
        }).catch((err)=>{
            toast.error(err?.respose?.data?.error||"An error occured")
            setState("error")
        })
    }
    },[])
    return(
        <div className="w-full h-full flex flex-wrap justify-center pt-[50px]">
            {
                state=="loading"&&
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[50px] h-[50px] border-4 rounded-full border-t-blue-500 animate-spin">

                    </div>
                </div>

                
            }
            {
                state == "success"&&
                items.map((items)=>{
                    return(
                        <ProductCard key={items.key} items={items}/>
                    )
                })
            }
        </div>
    )
}