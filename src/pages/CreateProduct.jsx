import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiLink from "../api";
import "./CreateProduct.scss";

const CreateProduct = () => {
  const navigator = useNavigate();

  const [productName, setProductname] = useState("");
  const [productLink, setProductLink] = useState("");
  const [company, setCompany] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [feedback, setFeedback] = useState("");

  const createProduct = () => {
    if (!productName || !productLink || !company || !price || !description) {
      //console.log(feedback)
      return setFeedback("Please fill in all fields.");
      // Feedback in Konsole ausgeben
    }
    fetch(`${apiLink}/products/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ProductName: productName,
        Company: company,
        Price: price,
        ProductLink: productLink,
      }),
    })
      .then((res) => res.json())
      .then((newProduct) => {
        console.log(newProduct.id);
        navigator(`/productdetails/${newProduct.id}`);
      })
      .then(() => {
        setFeedback("Product created successfully.");
      })
      .catch((err) => console.log("Error creating product: ", err));
  };

  return (
    <form>
      <h1>ADD A NEW PRODUCT</h1>

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

      <button className="btn-add" onClick={createProduct}>
        ADD PRODUCT
      </button>
    </form>
  );
};

export default CreateProduct;
