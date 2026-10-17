import { useState, useEffect } from "react";
import axios from "axios";
import Cart from "../components/Cart";
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=8",
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {loading == true && (
        <div className="flex items-center justify-center my-10">
          <div className="border-gray-300 h-8 rounded-full w-8 animate-spin border-4 border-t-gray-600"></div>
        </div>
      )}
      {loading == false && (
        <div className="font-jost">
          <div
            style={{ backgroundImage: "url('./image/slide_02.jpg')" }}
            className="min-h-screen bg-center bg-cover lg:bg-contain bg-no-repeat bg-secondary px-8 lg:px-40 flex items-center"
          >
            <div>
              <p className="text-2xl font-bold">New Collection</p>
              <h1 className="text-7xl font-bold">
                Luxury Without <br /> Labels
              </h1>
              <p className="text-lg font-bold mt-4 mb-3">
                Explore new-in products and best sellers
              </p>
              <button className="bg-primary px-8 py-2 text-white">
                View Collection
              </button>
            </div>
          </div>

          <div className="mt-20 max-w-[90%] lg:max-w-6xl mx-auto mb-20">
            <h1 className="font-bold text-4xl text-center">Best Seller</h1>
            <p className="text-2xl text-center">
              Expore our best seller product
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {products?.map((item) => (
                <Cart key={item.id} product={item} />
              ))}
            </div>

            <div className="flex items-center mt-10 justify-center">
              <button className="text-lg px-8 py-2 hover:bg-primary hover:text-white rounded-lg cursor-pointer transition-all duration-100">
                Explore Me
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
