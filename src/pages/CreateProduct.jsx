import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiLink from "../api";

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

      <label htmlFor="productName">Product Name</label>
      <input
        type="text"
        name="productName"
        id="productName"
        value={productName}
        onChange={(e) => setProductname(e.target.value)}
      />

      <label htmlFor="productLink">Link to Image</label>
      <input
        type="text"
        name="productLink"
        id="productLink"
        value={productLink}
        onChange={(e) => setProductLink(e.target.value)}
      />

      <label htmlFor="company">Company</label>
      <input
        type="text"
        name="company"
        id="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <label htmlFor="price">Price</label>
      <input
        type="text"
        name="price"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={createProduct}>ADD PRODUCT</button>
    </form>
  );
};

export default CreateProduct;
