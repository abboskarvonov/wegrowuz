import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL, getProductsById } from "../api";
import Breadcrumb from "../components/Breadcrumb";
import Loader from "../components/Loader";

export default function ProductView() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      getProductsById(id).then((data) => {
        setProduct(data.data);
      });
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <Breadcrumb />
      <div className="col-lg-10 mx-auto my-5 pt-5 content">
        {product ? (
          <div className="row py-5 px-2 px-md-0">
            <div className="col-lg-5">
              <img
                src={API_URL + product.img}
                alt=""
                className="img-thumbnail"
              />
            </div>
            <div className="col-lg-7">
              <h1 className="product-title text-white">{product.name_ru}</h1>
              <p className="product-price text-white">Цена: {product.price}</p>
              {product.description_ru ? (
                <p className="text-white my-3">{product.description_ru}</p>
              ) : null}
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}
