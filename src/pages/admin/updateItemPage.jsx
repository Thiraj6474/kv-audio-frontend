import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";

export default function UpdateItemPage() {

    const location = useLocation()


  const [productKey, setProductKey] = useState(location.state.key);
  const [productName, setProductName] = useState(location.state.name);
  const [productPrice, setProductPrice] = useState(location.state.price);
  const [productCategory, setProductCategory] = useState(location.state.category);
  const [productDimensions, setProductDimensions] = useState(location.state.dimentions);
  const [productDescription, setProductDescription] = useState(location.state.description);
  const [productImage, setProductImages] = useState([])
  const navigate = useNavigate()
  

  async function handleUpdateItem(){

    let  updateImages = location.state.image

    if(productImage.length > 0){
      const promises = []
      
          for(let i = 0 ; i<productImage.length ; i++){
            console.log(productImage[i])
            const promise = mediaUpload(productImage[i])
            promises.push(promise);
          }

          updateImages = await Promise.all(promises);
      
    }


    console.log(productKey,productName,productPrice,productCategory,productDimensions,productDescription)

    const token = localStorage.getItem("token")
    if(token){
        try{
        const result = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productKey}`,{
           
            name : productName,
            price : productPrice,
            category : productCategory,
            dimentions : productDimensions,
            description : productDescription,
            image : updateImages,
        },{
            headers : {
                Authorization : "Bearer " + token
            }
        });
        toast.success(result.data.message)
        navigate("/admin/items")
    }catch(err){
        toast.error(err.response.data.error)

    }
    }else{
        toast.error("You are not authorized to add items")
    }
  }

  return (
    <div className="w-full h-full flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Update Product</h1>

      <div className="w-[400px] border p-4 flex flex-col gap-3 rounded">
        <input
          disabled
          type="text"
          placeholder="Product Key"
          value={productKey}
          onChange={(e) => setProductKey(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="border p-2 rounded"
        />

        <select
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="audio">Audio</option>
          <option value="lights">Lights</option>
          <option value="other">Other</option>
        </select>

        <input
          type="text"
          placeholder="Product Dimensions"
          value={productDimensions}
          onChange={(e) => setProductDimensions(e.target.value)}
          className="border p-2 rounded"
        />

        <textarea
          placeholder="Product Description"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="border p-2 rounded"
          rows={3}
        />

        <input
          type="file"
          multiple onChange={(e) => {setProductImages(e.target.files)}}
          className="border p-2 rounded w-full"
        />



        <button onClick={handleUpdateItem} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Update
        </button>
        <button onClick={()=>{navigate("/admin/items")}} className="bg-red-600 text-white p-2 rounded hover:bg-red-700">
            Cancel
        </button>
      </div>
    </div>
  );
}
