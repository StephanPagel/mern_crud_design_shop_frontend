import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import apiLink from "../api";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiLink}/products/detail/` + id)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    product && (
      <div>
        <div className="btn-container">
          <p className="btn-edit-delete">
            <Link to="/editproduct">Edit</Link>
          </p>
          <p className="btn-edit-delete">
            <Link to="/deleteproduct">Delete</Link>
          </p>
        </div>
        <div className="product-item">
          <img src={product.ProductLink} alt="product" />
          <div className="product-info">
            <div>
              <p>{product.ProductName}</p>
              <p className="company">{product.Company}</p>
            </div>
            <p>{product.Price}</p>
          </div>
          <p className="description-header">Product Description:</p>
          <p className="description-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="btn-container">
          <p className="btn-buy">BUY PRODUCT</p>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
