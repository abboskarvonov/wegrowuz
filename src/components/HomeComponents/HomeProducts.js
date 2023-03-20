import React, { useState, useEffect } from "react";
import { getCategories } from "../../api";
import Loader from "../Loader";
import HomeItem from "./HomeItem";

export default function HomeProducts() {
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
    <div className="col-lg-10 mx-auto my-5 pt-5 content">
      <p className="content-text">Продукция</p>
      <h1 className="content-title">Имеем в наличии</h1>
      <div className="row py-5 px-2 px-md-0">
        {category.length ? (
          category.map((item) => <HomeItem key={item.id} {...item} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
