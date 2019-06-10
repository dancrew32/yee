import React from "react";
import { A, usePath } from "hookrouter";
import clsx from "clsx";

const pathToText = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/products", text: "Products" }
];

const getClasses = (a: string, b: string): string => {
  return clsx({
    active: a.split("/")[1] === b.split("/")[1]
  });
};

export const Nav = () => {
  const path = usePath();
  return (
    <nav>
      {pathToText.map(item => (
        <A
          href={item.href}
          className={getClasses(path, item.href)}
          key={item.href}
        >
          {item.text}
        </A>
      ))}
    </nav>
  );
};
