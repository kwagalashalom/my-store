import React from "react";
import ProductImage from "../assets/image.jpg";
const ProductCard = (data) => {
  console.log(data.data);
  return (
    <div className="bg-white rounded shadow my-4 ">
      <img src={data.data.image} className="h-[12rem] w-[12rem] mx-auto" />
      {/* details */}
      <div className="p-3">
        <p className="font-bold text-xl">{data.data.title}</p>
        <p className="font-bold text-xl">Ugx:{data.data.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
