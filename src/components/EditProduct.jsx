import { useState } from "react";
// import apiLink from "../api";
// import { useNavigate } from "react-router-dom";

const EditProduct = (props) => {
  // const navigator = useNavigate();

  const [productName, setProductname] = useState("");
  const [productLink, setProductLink] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form>
      <h1>EDIT PRODUCT</h1>

      <input
        type="text"
        name="productName"
        id="productName"
        value={productName}
        placeholder="Product Name"
        onChange={(e) => setProductname(e.target.value)}
      />

      <input
        type="text"
        name="productLink"
        id="productLink"
        value={productLink}
        placeholder="URL Image"
        onChange={(e) => setProductLink(e.target.value)}
      />

      <input
        type="text"
        name="company"
        id="company"
        value={company}
        placeholder="Company"
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        type="text"
        name="price"
        id="price"
        value={price}
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        name="description"
        id="description"
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="btn-add">SUBMIT CHANGES</button>
    </form>
  );
};

export default EditProduct;
