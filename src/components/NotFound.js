import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";

export default function NotFound() {
  return (
    <>
      <Breadcrumb />
      <div className="col-lg-10 mx-auto my-5 pt-5 content">
        <h1 className="content-title my-5">Страница не найдена</h1>
        <h1 className="not-found my-5">
          4<span>0</span>4
        </h1>
        <div className="text-center">
          <Link to="/" className="btn btn-lg btn-danger p-3 px-5">
            Главная страница
          </Link>
        </div>
      </div>
    </>
  );
}
