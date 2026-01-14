import './App.css'
import ProductCard from './components/productCard'
import { MdBluetoothAudio, MdOutlineReviews } from "react-icons/md";
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { TbDeviceSpeaker } from "react-icons/tb";
import Adminpage from './pages/admin/adminpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import Testing from './components/testing';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <BrowserRouter>
      <Toaster position='top-right' /> 
      <Routes path ="/*">
        <Route path="/testing" element={<Testing/>}/>
        <Route path="/login" element={<LoginPage/>}/>

        <Route path="/admin/*" element={<Adminpage/>}/>
        <Route path="/*" element={<HomePage/>}/>


      </Routes>
    
    </BrowserRouter>

  );
}

export default App
