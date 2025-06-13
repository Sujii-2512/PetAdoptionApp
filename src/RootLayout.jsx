import { Link, Outlet } from "react-router-dom";
import SearchParams from "./SearchParams";
import "./style.css"


const RootLayout = () => {
    return (
      <div>
        <Link to="/">
            <h1 className="adopt">Adopt Me!</h1>
        </Link>
        <Outlet />
      </div>
    );
}

export default RootLayout