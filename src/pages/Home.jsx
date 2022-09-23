import { useEffect, useState } from "react";
import apiLink from "../api";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${apiLink}/products/all`)
      .then((products) => products.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <Link to={`/productdetails/${product.id}`}>
            <img src={product.ProductLink} alt="product" />
          </Link>
          <div className="product-info">
            <div>
              <p>{product.ProductName}</p>
              <p className="company">{product.Company}</p>
            </div>
            <p>{product.Price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
