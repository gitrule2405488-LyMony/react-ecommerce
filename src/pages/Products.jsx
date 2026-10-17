import Cart from "../components/Cart";
import useGetAllProducts from "../hooks/useGetAllProducts";
function Products() {
  const {products , loading} = useGetAllProducts();
  
  return (
    <>
    {
      loading == true && (
        <div className = "flex items-center justify-center py-10">
          <div className = "border-gray-300 h-8 border-4 w-8 animate-spin rounded-full border-t-gray-600  ">

          </div>
        </div>
      )
    }


    {
      loading == false &&(
    <div className="mt-10 max-w-[90%] lg:max-w-6xl mx-auto">
      <h1 className="font-bold uppercase text-5xl text-center">All Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {
          products.map((product) =>(
            <Cart key={product.id} product={product} />
          ))
        }
      </div>
    </div>
      )
    }
  
      </>
  );
}

export default Products