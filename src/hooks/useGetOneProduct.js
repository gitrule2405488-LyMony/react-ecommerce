import { useEffect, useState } from "react";
import axios from "axios";

function useGetOneProduct(id) {
    
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignoreResponse = false;

    const fetchProduct = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
        );
        if (!ignoreResponse) {
          setProduct(response.data);
          setLoading(false);
        }
      } catch (fetchError) {
        console.error("Failed to fetch product:", fetchError);
        if (!ignoreResponse) {
          setError("Unable to load this product. Please try again later.");
          setLoading(false);
        }
      }
    };

    fetchProduct();
    return () => {
      ignoreResponse = true;
    };
  }, [id]);
  return {
    product , 
    loading , 
    error,
  };
}

export default useGetOneProduct