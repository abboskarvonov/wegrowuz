import React, { useState, useEffect } from "react";
import { getMenues } from "../api";
import logo from "../images/logo.png";
import NavLink from "./NavLink";

export default function Navbar() {
  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    const fetchNav = async () => {
      getMenues().then((data) => {
        setNavbar(data.data.items);
      });
    };
    fetchNav();
  }, []);
  return (
    <div className="container-fluid navbar px-1 px-md-0">
      <div className="navBar-nav py-3">
        <div className="col-lg-10 mx-auto">
          <div className="row align-items-center">
            <div className="col-lg-2 col-4">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
            </div>
            <div className="col-lg-10 col-8">
              <div className="navBar">
                <nav
                  className="nav justify-content-center justify-content-md-center"
                  id="nav"
                >
                  {navbar.map((item) => (
                    <NavLink key={item.id} {...item} />
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
