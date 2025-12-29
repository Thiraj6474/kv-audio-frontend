import { useState } from "react";
import "./login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const navigate = useNavigate();

    function handleOnSubmit(e){
        e.preventDefault()    //stop the refreshing
        console.log(email,password)

        axios.post("http://localhost:3000/api/users/login" , {
            email:email,
            password:password
        }).then((res)=>{
            console.log(res)
            toast.success("Login Success")
            const user = res.data.user
            if(user.type ==="admin"){
                navigate("/admin/")
                
            }else{
                navigate("/")
            }

        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data.error)
        })
    }

    return(
        <div className="bg-picture w-full h-screen bg-yellow-500 justify-center items-center flex" >

            <form onSubmit={handleOnSubmit}>
            <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl flex justify-center items-center flex-col relative" >
                <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover" />

                <input type="email"
                placeholder="Email"
                className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                value = {email}
                
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}/>

               <input type="password"
                placeholder="Password"
                className="mt-4 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-xl outline-none" 
                value={password}
                
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} />

                <button className="my-8 w-[300px] h-[50px] bg-[#15cdb0] text-2xl text-white rounded-lg">
                    Login
                </button>

            </div>
            </form>

        </div>
    )
}