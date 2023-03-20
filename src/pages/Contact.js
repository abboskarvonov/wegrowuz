import React from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function Contact() {
  return (
    <>
      <Breadcrumb />
      <div className="col-lg-10 mx-auto my-5 pt-5 content contact">
        <h1 className="content-title">Контакты</h1>
        <div className="row py-5 px-2 px-md-0">
          <h4 className="text-white">
            <span className="text-danger my-3">Телефон:</span> +998 (88)
            328-30-00
          </h4>
          <h4 className="text-white">
            <span className="text-danger my-3">Прием звонков:</span> Пн-Пт с
            9:00 до 17:00
          </h4>
          <h4 className="text-white">
            <span className="text-danger my-3">Адрес:</span> 130100, Узбекистан,
            Джизакская область, Ш.Рашидовский район, улица Пахтакор, дом 128
          </h4>
        </div>
      </div>
    </>
  );
}
