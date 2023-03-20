import React from "react";
import CategoryItem from "./CategoryItem";

export default function CategoryList({ category }) {
  return (
    <>
      <div className="row py-5 px-2 px-md-0">
        {category.map((item) => (
          <CategoryItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
