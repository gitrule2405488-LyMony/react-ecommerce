import { Link } from "react-router-dom";

function Cart({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="border border-gray-400 rounded-xl cursor-pointer overflow-hidden group"
    >
      <figure className="p-2 h-40 lg:h-64 overflow-hidden">
        <img
          className="object-cover group-hover:scale-110 transition-all"
          src={product.image}
          alt={product.title}

        />
      </figure>
      <div className="p-2">
        <p className="line-clamp-1">products name</p>
        <p className="text-red-600">Price : $09.90</p>
      </div>
    </Link>
  );
}

export default Cart;
