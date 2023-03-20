import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ name_ru, name_en, link }) {
  return (
    <Link to={link} className="nav-link">
      {name_ru}
    </Link>
  );
}
