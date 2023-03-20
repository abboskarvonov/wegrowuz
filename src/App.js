import { Route, Routes } from "react-router-dom";
import Home from "./components/HomeComponents/Home";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product-view/:id" element={<ProductView />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
