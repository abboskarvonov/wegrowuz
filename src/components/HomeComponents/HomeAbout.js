import React from "react";
import { Link } from "react-router-dom";
import about from "../../images/about.webp";

export default function HomeAbout() {
  return (
    <div className="col-lg-10 mx-auto my-5 py-5 px-2 px-md-0 about">
      <p className="content-text">Немного о нас</p>
      {/* <h1 className="content-title">Стильная мужская одежда</h1> */}
      <div className="row justify-content-between pt-5">
        <div className="col-lg-6">
          <h1 className="about-title">Хлопок</h1>
          <p className="my-4 about-text">
            Наиболее часто используемым натуральным волокном для изготовления
            одежды является хлопок , на долю которого приходится более трети
            всех волокон, используемых в текстильной промышленности. Он
            используется в трикотаже, ткани и кружеве. Он также используется для
            смешивания с другими волокнами для создания гибридных тканей.
            Типичным примером этого является полихлопок, комбинация полиэстера и
            хлопка, который можно найти в ряде предметов домашнего обихода.
            Хлопок получают из растения семейства гибискусов. Его нужно собрать,
            прежде чем превратить в сырье. Те, кто занимается хлопковой
            промышленностью, знают, что хлопок готов к уборке, когда коробочка,
            которая является внешней оболочкой плода, раскрывается, обнажая
            пушистые, мягкие внутренние волокна. Затем его можно использовать в
            качестве сырья в хлопчатобумажной текстильной промышленности.
          </p>
          <Link to="/about" className="btn btn-danger btn-lg py-3 px-5">
            Подробнее
          </Link>
        </div>
        <div className="col-lg-4 text-center">
          <div className="about-img">
            <img src={about} className="about-img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
