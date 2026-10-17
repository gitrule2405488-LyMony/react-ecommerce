import { Link } from "react-router-dom"
function Footer() {
  return (
    <footer className="bg-primary mt-20 flex flex-col lg:flex-row  items-center justify-evenly text-white text-lg py-5">
        <div>
            <p>Copyright &#169; -Master Store</p>
        </div>
        <div>
            <ul className="flex items-center justify-center gap-4">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="products">Products</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer