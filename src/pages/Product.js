import React, { useEffect, useState } from "react";
import { getCategoriesById, getProducts } from "../api";
import ProductList from "../components/ProductsComponent/ProductList";
import Loader from "../components/Loader";
import Breadcrumb from "../components/Breadcrumb";
import { useParams } from "react-router-dom";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      getProducts().then((data) => {
        setProducts(data.data.items);
      });
    };
    fetchProducts();
    const fetchCategory = async () => {
      getCategoriesById(id).then((data) => {
        setCategory(data.data);
      });
    };
    fetchCategory();
  }, [id]);

  return (
    <>
      <Breadcrumb />
      <div className="col-lg-10 mx-auto my-5 pt-5 content">
        <h1 className="content-title">{category.name_ru}</h1>
        {products.length ? <ProductList products={products} /> : <Loader />}
      </div>
    </>
  );
}
