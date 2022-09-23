import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <h1>
        <Link to="/">THE DESIGN SHOP</Link>
      </h1>
      <nav>
        <div>
          <p>Weekly Recommendations</p>
          <p>Contact</p>
          <p>
            <Link to="/createproduct">Add</Link>
          </p>
        </div>
      </nav>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
