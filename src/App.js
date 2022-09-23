import "./App.scss";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import CreateProduct from "./pages/CreateProduct";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productdetails/:id" element={<ProductDetails />} />
          <Route path="/createproduct" element={<CreateProduct />} />
          <Route path="/editproduct" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
