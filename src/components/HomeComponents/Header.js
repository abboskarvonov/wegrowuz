import React from "react";
import location from "../../images/icon/location.png";
import phone from "../../images/icon/phone.png";

export default function Header() {
  return (
    <div className="container-fluid header px-1 px-md-0">
      <div className="col-lg-10 mx-auto">
        <div className="row">
          <div className="col-lg-4 mx-auto text-center">
            <h1 className="header-text">WEGROW WEAR</h1>
            {/* <p className="header-description">
              Собственной производства Вязания, Крашения, Пошив сделаем все вида
              трикотажный изделями
            </p> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="col-lg-8 col-md-11 mx-auto">
              <h1 className="header-big-text">
                Одежды для всей семьи на ваш вкус
              </h1>
            </div>
            <p className="header-sub-text">по доступным ценам</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mx-auto">
        <div className="top-address">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-3 mb-lg-0">
              <div className="row align-items-center">
                <div className="col-lg-2 col-2">
                  <img src={location} alt="" />
                </div>
                <div className="col-lg-10 col-10">
                  <p>
                    130100, Узбекистан, Джизакская область, Ш.Рашидовский район,
                    улица Пахтакор, дом 128
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-lg-2 col-2">
                  <img src={phone} alt="" />
                </div>
                <div className="col-lg-10 col-10">
                  <p>Telegram: +998 (88) 328-30-00</p>
                  <p>Whatsapp: +998 (91) 943-44-03</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
