import React from "react";

import ProductItem from "./ProductItem";
import { useParams } from "react-router-dom";

export default function ProductList({ products }) {
  const { id } = useParams();

  return (
    <div className="row py-5 px-2 px-md-0">
      {products.map((item) =>
        item.category_id == id ? <ProductItem key={item.id} {...item} /> : null
      )}
    </div>
  );
}
