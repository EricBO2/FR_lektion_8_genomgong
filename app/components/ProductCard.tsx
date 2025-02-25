import type { Product } from "~/types/Product";

export function ProductCard(props: Product) {
  return (
    <div>
      <p>id: {props.id}</p>
      <h3>title: {props.title}</h3>
      <p>price: {props.price}</p>
      <p>description: {props.description}</p>
      <p>category: {props.category}</p>
      <img src={props.image}></img>
      <p>rating count: {props.rating.count}</p>
      <p>rating rate: {props.rating.rate}</p>
    </div>
  );
}
