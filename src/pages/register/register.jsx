import { useState } from "react";
import "./register.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        console.log({
            email,
            password,
            firstName,
            lastName,
            address,
            phoneNumber
        });
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`,{
            email:email,
            firstName:firstName,
            lastName:lastName,
            password:password,
            address:address,
            phoneNumber:phoneNumber
        }).then(()=>{
            toast.success("Registration Success")
            navigate("/login")
        }).catch((err)=>{
            toast.error(err?.respose?.data?.error||"An error occured")
        })

        // No backend integration as requested
    }

    return (
        <div className="bg-picture w-full h-screen flex justify-center items-center">

            <form onSubmit={handleSubmit}>
                <div className="w-[400px] h-[600px] backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center">

                    <img src="/logo.png" alt="logo" className="w-[100px] h-[100px] object-cover" />

                    {/* First Name */}
                    <input
                        type="text"
                        placeholder="First Name"
                        className="mt-3 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    {/* Last Name */}
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="mt-3 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="mt-3 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {/* Password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="mt-3 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Address */}
                    <input
                        type="text"
                        placeholder="Address"
                        className="mt-3 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    {/* Phone */}
                    <input
                        type="text"
                        placeholder="Phone"
                        className="mt-3 w-[300px] h-[40px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />

                    {/* Button */}
                    <button className="my-6 w-[300px] h-[50px] bg-[#15cdb0] text-2xl text-white rounded-lg">
                        Register
                    </button>

                </div>
            </form>

        </div>
    );
}