import React, { useState, useEffect } from "react";
import { getCategories } from "../api";
import Breadcrumb from "../components/Breadcrumb";
import Loader from "../components/Loader";
import CategoryList from "../components/ProductsComponent/CategoryList";

export default function Products() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      getCategories().then((data) => {
        setCategory(data.data.items);
      });
    };
    fetchCategory();
  }, []);

  return (
    <>
      <Breadcrumb />
      <div className="col-lg-10 mx-auto my-5 pt-5 content">
        <h1 className="content-title">Наш ассортимент</h1>
        {category.length ? <CategoryList category={category} /> : <Loader />}
      </div>
    </>
  );
}
