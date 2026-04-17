import { useState, type ChangeEvent } from "react";

type ProductItem = {
  id: number;
  name: string;
  price: number;
};

type InfoProps = {
  name: string;
  price: number;
};

function Info({ name, price }: InfoProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
}

const products: ProductItem[] = [
  { id: 1, name: "Product 1", price: 19.99 },
  { id: 2, name: "Product 2", price: 29.99 },
  { id: 3, name: "Product 3", price: 39.99 },
  { id: 4, name: "Basic Keyboard", price: 49.0 },
  { id: 5, name: "Gaming Mouse", price: 59.5 },
];

export default function Product() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");

  function handleClick() {
    setCount((prev) => prev + 1);
  }

  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  const normalizedQuery = query.trim().toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(normalizedQuery),
  );

  return (
    <div>
      <h2>Product List Practice</h2>

      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        placeholder="Search product name"
      />
      <p>Results: {filteredProducts.length}</p>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map((product) => (
          <Info key={product.id} name={product.name} price={product.price} />
        ))
      )}

      <h3>Button Click Count: {count}</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
