import React from "react";
import { A } from "hookrouter";

function Item(props) {
  const { id } = props;
  return (
    <A class="block" href={`/products/${id}`}>
      <img src={`https://source.unsplash.com/random/${id}`} alt="" />
    </A>
  );
}

export default function Products() {
  const items = new Array(50).fill();
  return (
    <div className="blocks">
      {items.map((item, index) => (
        <Item id={index} />
      ))}
    </div>
  );
}
