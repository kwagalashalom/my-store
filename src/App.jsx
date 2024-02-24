import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  //   fetch products
  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(({ data, status }) => {
        if (status == 200) {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   on mount
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="p-5 bg-slate-100 min-h-screen">
      <h1 className="text-slate-500 font-bold uppercase text-center text-xl">
        STORES
      </h1>
      <p className="font-bold text-slate-600 ">Categories</p>
      {/* categories */}
      <div>
        <p>Men</p>
        <p>Women</p>
      </div>

      {/* latest products */}
      <div className="grid grid-cols-1  md:grid-cols-4 gap-4">
        {products.map((data, index) => (
          <ProductCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default App;
