import React from "react";
import phone from "../images/icon/phone.png";
import time from "../images/icon/002-back-in-time.png";
import location from "../images/icon/location.png";
import email from "../images/icon/001-email.png";
import "./footer.css";
import FooterForm from "./FooterForm";

export default function Footer() {
  return (
    <>
      <div className="line"></div>
      <div className="footer py-5 px-2 px-md-0">
        <div className="col-lg-10 mx-auto">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-contact py-4">
                <div className="footer-contact-item">
                  <img src={phone} alt="" />
                  <p>Telegram: +998 (88) 328-30-00</p>
                  <p>Whatsapp: +998 (91) 943-44-03</p>
                </div>
                <div className="footer-contact-item">
                  <img src={time} alt="" />
                  <p>Пн-Пт с 8:00 до 18:00</p>
                  <p>Сб-Вс с 9:00 до 17:00</p>
                </div>
                <div className="footer-contact-item">
                  <img src={location} alt="" />
                  <p>
                    130100, Узбекистан, Джизакская область, Ш.Рашидовский район,
                    улица Пахтакор, дом 128
                  </p>
                </div>
                <div className="footer-contact-item">
                  <img src={email} alt="" />
                  <p>info@wegrow.uz</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <FooterForm />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-5 position-relative">
        <div className="container">
          <div className="line"></div>
          <div className="row py-5 align-items-center">
            <div className="col-lg-6">
              <p className="copyright">
                Copyright © 2023 - 2023
                <br />
                ООО Wegrow Plus
              </p>
            </div>
            <div className="col-lg-6">
              <p className="powered">
                Powered by
                <br />
                <a href="https://abbosdev.uz" target="_blank">
                  abbosdev.uz
                </a>
              </p>
            </div>
          </div>
        </div>
        <a href="#" className="scroll-up">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>
    </>
  );
}
