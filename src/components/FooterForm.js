import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function FooterForm() {
  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_zppf853",
        "template_jbm4fre",
        form.target,
        "J5h0-wgakf8VItSkX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="footer-form py-4">
      <h1 className="footer-title">Оформить предзаказ</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder="Ваше имя"
          name="name"
          className="form-control my-4 py-3"
        />
        <input
          type="text"
          placeholder="Телефон"
          name="phone"
          className="form-control my-4 py-3"
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="form-control my-4 py-3"
        />
        <textarea
          name="messages"
          id=""
          className="form-control my-4 py-3"
          placeholder="Область ввода"
        ></textarea>
        <div className="d-grid">
          <button type="submit" className="btn btn-danger btn-lg py-3">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );
}
