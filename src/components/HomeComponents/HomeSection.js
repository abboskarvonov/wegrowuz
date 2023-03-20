import React from "react";
import img1 from "../../images/icon/002-color-palette.png";
import img2 from "../../images/icon/001-shopping-cart.png";
import img3 from "../../images/icon/003-shipped.png";
import img4 from "../../images/icon/004-wallet.png";

export default function HomeSection() {
  return (
    <div className="section py-5 px-2 px-md-0">
      <div className="col-lg-10 mx-auto">
        <p className="section-text">Преимущества</p>
        <h1 className="section-title">Все для вашего удобства</h1>
        <div className="col-lg-6 section-content text-center py-5 mt-5">
          <div className="row">
            <div className="col-lg-6 mb-5">
              <img src={img1} className="section-img" alt="" />
              <p>Широкий ассортимент</p>
            </div>
            <div className="col-lg-6 mb-5">
              <img src={img2} className="section-img" alt="" />
              <p>Скидки и распродажи</p>
            </div>
            <div className="col-lg-6 mb-5">
              <img src={img3} className="section-img" alt="" />
              <p>Быстрая доставка</p>
            </div>
            <div className="col-lg-6">
              <img src={img4} className="section-img" alt="" />
              <p>Доступные цены</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
