import axios from "axios";
import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const sampleArr = [
  {
    key: "P001",
    name: "Wireless Headphones",
    price: 15999,
    category: "audio",
    dimentions: "20 x 18 x 8 cm",
    availability: true
  }
];



export default function AdminItemPage() {
  const [items, setItems] = useState(sampleArr);
  const [itemsLoaded,setItemsLoaded] = useState(false);

  useEffect(() => {
    if(!itemsLoaded){
        const token = localStorage.getItem("token");
        axios.get("http://localhost:3000/api/products", {
            
        headers: { Authorization: `Bearer ${token}` },
      })
         .then((res) =>{
            console.log(res.data);
            setItems(res.data);
            setItemsLoaded(true);
         })
         .catch((err)=>{
            console.error(err);
         })
        }
    },[itemsLoaded]);

        




  const handleDelete = (key) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    setItems(items.filter((item) => item.key !== key));
    const token = localStorage.getItem("token");
    axios.delete(`http://localhost:3000/api/products/${key}`,{
        headers:{Authorization:`Bearer ${token}`},
    }).then(
        (res)=>{
            console.log(res.data);
            setItemsLoaded(!itemsLoaded);
        }
    ).catch((err=>{
        console.error(err);
    }))
  };



  return (
    <div className="w-full min-h-screen bg-gray-100 p-6 relative flex justify-center">
      {!itemsLoaded && <div className="border-4 my-4 border-b-green-500 rounded-full animate-spin w-[100px] h-[100px]"></div>}
      {itemsLoaded && <div className="overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Product Management
        </h2>

        <table className="w-full border-gray-300 rounded-lg shadow-md bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700 text-sm uppercase text-left">
              <th className="p-3 border">Key</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Category</th>
              <th className="p-3 border">Dimensions</th>
              <th className="p-3 border">Availability</th>
              <th className="p-3 border text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((product) => (
              <tr
                key={product.key}
                className="border-b hover:bg-gray-200 transition"
              >
                <td className="p-3 font-medium">{product.key}</td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">Rs. {product.price}</td>
                <td className="p-3 capitalize">{product.category}</td>
                <td className="p-3">{product.dimentions}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      product.availability
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.availability ? "Available" : "Unavailable"}
                  </span>
                </td>
                <td className="p-3 text-center space-x-2">
                  <Link
                    to={`/admin/items/edit/${product.key}`}
                    className="px-3 py-1 text-sm rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <FaEdit className="inline mr-1"/>
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product.key)}
                    className="px-3 py-1 text-sm rounded bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    <FaTrashAlt className="inline mr-1"/>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>}



      {/* Add Button */}
      <Link to="/admin/items/add">
        <CiCirclePlus className="text-[70px] text-blue-600 fixed right-6 bottom-6 hover:text-green-600 transition" />
      </Link>
    </div>
  );
}
