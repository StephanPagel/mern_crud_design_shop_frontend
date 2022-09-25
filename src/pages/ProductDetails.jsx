import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiLink from "../api";
import "./ProductDetails.scss";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    fetch(`${apiLink}/products/detail/` + id)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id, setProduct]);

  const deleteProduct = () => {
    fetch(`${apiLink}/products/delete/` + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(navigator("/"))
      .catch((err) => console.log(err));
  };

  return (
    product && (
      <div>
        <div className="btn-container">
          <button className="btn-edit" to="/editproduct">
            Edit
          </button>
          <button className="btn-delete" onClick={() => setDeleteConfirm(true)}>
            Delete
          </button>
        </div>

        <div className={deleteConfirm ? "delete-confirm" : "hidden"}>
          <span>Are you sure that you want to delete this product?</span>
          <div className="btn-container">
            <button className="btn-confirm-yes" onClick={deleteProduct}>
              YES
            </button>
            <button
              className="btn-confirm-cancel"
              onClick={() => setDeleteConfirm(false)}
            >
              CANCEL
            </button>
          </div>
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
          <button className="btn-buy">BUY PRODUCT</button>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
