import React from "react";

export default function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border my-5 text-light"
        style={{ width: "4rem", height: "4rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
