import {useState, useEffect} from "react";
import axios from "axios";

function useGetAllProducts() {
 const [products , setProducts] = useState([]);
  const [loading , setLoading] = useState(true);
  

  useEffect(() =>{
     const fetchproducts = async () =>{
      try{
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data);
        setProducts(res.data);
      }catch(err){
        console.error("Error fetching products:", err);
      }finally{
        setLoading(false);
      }
     }
      fetchproducts();

  },[]);
  return {
    products ,
    loading,
  };
}

export default useGetAllProducts