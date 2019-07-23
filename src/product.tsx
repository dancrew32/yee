import React from "react";

export default function Product(props: { id: number }) {
  const { id } = props;
  return <div>product {id}</div>;
}
