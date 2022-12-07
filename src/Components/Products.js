import React, { useEffect } from "react";

export default function Products() {
  const getProducts = async () => {
    const token = localStorage.getItem("login");
    const res = await fetch("http://localhost:3004/640/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.log("Không có quyền");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return <div>Products</div>;
}
