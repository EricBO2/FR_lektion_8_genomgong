import { useEffect, useState } from "react";
import { ProductCard } from "~/components/ProductCard";
import type { Product } from "~/types/Product";

export function Welcome() {
  //ones on componenet/view creation
  const [productList, setProductList] = useState<Product[]>([
    {
      id: 0,
      title: "",
      price: 0,
      description: "",
      category: "",
      image: "https://images-bonnier.imgix.net/files/ifo/production/20210713144653/SE-Gulerod-med-skr%C3%A6l.jpg?auto=compress,format&w=1024%201024w",
      rating: {
        rate: 0,
        count: 0,
      },
    },
  ]);

  useEffect(() => {

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
          <ProductCard
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
          />
        )
      )}
    </div>
  );
}
