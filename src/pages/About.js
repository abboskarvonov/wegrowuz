import React, { useEffect, useState } from "react";
import { getAboutById } from "../api";
import Breadcrumb from "../components/Breadcrumb";

export default function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      getAboutById("1").then((data) => {
        setAbout(data.data);
      });
    };
    fetchAbout();
  }, []);

  console.log(about);

  return (
    <>
      <Breadcrumb />
      <div className="col-lg-10 mx-auto my-5 pt-5 content">
        <h1 className="content-title">{about.name_ru}</h1>
        <div className="row py-5 px-2 px-md-0">
          <p className="about-text">{about.description_ru}</p>
        </div>
      </div>
    </>
  );
}
