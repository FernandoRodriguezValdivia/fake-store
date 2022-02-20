import { useState, useEffect } from 'react';

export default function UseGet() {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const json = await res.json();
    setProducts(json);
  }, []);
  return products;
}
