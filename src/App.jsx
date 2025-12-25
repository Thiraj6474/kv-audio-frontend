import './App.css'
import ProductCard from './components/productCard'
import { MdBluetoothAudio, MdOutlineReviews } from "react-icons/md";
import { BsGraphDown } from "react-icons/bs";
import { FaRegBookmark, FaRegUser } from "react-icons/fa";
import { TbDeviceSpeaker } from "react-icons/tb";
import Adminpage from './pages/admin/adminpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';

function App() {

  return (
    <BrowserRouter>
      <Routes path ="/*">
        <Route path="/admin/*" element={<Adminpage/>}/>
        <Route path="/*" element={<HomePage/>}/>


      </Routes>
    
    </BrowserRouter>

  );
}

export default App
