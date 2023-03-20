import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../api";

export default function ProductItem({ id, name_ru, img }) {
  return (
    <div className="col-lg-3 mb-4">
      <div className="card products-card">
        <img src={API_URL + img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name_ru}</h5>
          <Link to={`/product-view/${id}`} className="btn btn-danger">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}
