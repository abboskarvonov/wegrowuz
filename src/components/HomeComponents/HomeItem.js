import React from "react";
import { API_URL } from "../../api";

export default function HomeItem({ name_ru, description_ru, img }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="products">
        <div className="products-img">
          <div className="products-overlay"></div>
          <img src={API_URL + img} alt="" />
          <div className="products-title">
            <h2>{name_ru}</h2>
          </div>
        </div>
        {description_ru ? (
          <div className="products-content">
            <p>Футболки, Худи, Свитшоти, Шорти</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
