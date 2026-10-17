import useGetOneProduct from "../hooks/useGetOneProduct";
import { Link , useParams } from "react-router-dom";
function ProductDetail() {
   const { id } = useParams();
const {product , loading , error} = useGetOneProduct(id)

  return (
    <>
    <div className=" bg-gray-200 font-jost">
      <div className="max-w-[90%] lg:max-w-3lg lg:mx-80 mx-8">
            <div className="flex items-center gap-2 py-4">
                <Link to="/" className="text-xl">
                  Home
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <Link to = "/products" className = "text-xl">
                  Product
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <h2 className="text-xl font-bold">
                  {product?.category ?? "Product details"}
                </h2>
            </div>
      </div>
    </div>


      <div className="max-w-[90%] lg:max-w-5lg lg:mx-80 mx-4 my-8 lg:px-0">
        {loading ? (
          <p role="status" className="py-8 text-center">
            Loading product...
          </p>
        ) : error ? (
          <p role="alert" className="py-8 text-center text-red-600">
            {error}
          </p>
        ) : product ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-hidden group">
            <div className="border border-gray-400 rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-all"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div>
              <h1 className="font-bold text-2xl my-2">{product.title}</h1>
              <p className="text-2xl text-red-600 my-2">
                ${Number(product.price).toFixed(2)}
              </p>

              {/* button count , btn add to cart btn buy */}

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mt-10">
                <button className="border border-gray-400 px-8 py-2 flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14"
                    />
                  </svg>
                  <span>1</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
                <button className="bg-primary text-white px-8 py-2 text-lg">
                  Add to cart
                </button>
                <button className="bg-orange-500 text-white px-8 py-2 text-lg">
                  Buy Now
                </button>
              </div>

              {/* description */}
              <div className="border-t-1 border-t-gray-400 mt-10 pb-4">
                <p className="mt-10 text-gray-500">{product.description}</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ProductDetail;
