import { useEffect, useState } from "react";
import type { Product } from "~/types/product";

export function Welcome() {
  //ones on componenet/view creation
  const [productList, setProductList] = useState<Product[]>([
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "",
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ]);

  useEffect(() => {
    /*async () => {
      const result = await fetch("https://fakestoreapi.com/products");
      console.log(result);
    };*/

    async function fetchData() {
      const result = await fetch("https://fakestoreapi.com/products");
      const product: Product[] = await result.json();
      setProductList(product);
    }
    fetchData();
  }, []);

  return (
    <div>
      {productList.map(
        ({ id, title, price, description, category, image, rating }) => (
          <div>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <p>price: {price}</p>
            <p>description: {description}</p>
            <p>category: {category}</p>
            <p>image: {image}</p>
            <p>rating count: {rating.count}</p>
            <p>rating rate: {rating.rate}</p>
          </div>
        )
      )}
    </div>
  );
}
