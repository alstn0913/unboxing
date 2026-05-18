import { useState, type ChangeEvent } from "react";
import Input from "@/components/Input";

type ProductItem = {
  id: number;
  name: string;
  price: number;
};

type InfoProps = {
  name: string;
  price: number;
};

type SortOrder = {
  code: string;
  label: string;
};



function Info({ name, price }: InfoProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  );
}

const sortOptions: SortOrder[] = [
  { code: "default", label: "Default" },
  { code: "priceAsc", label: "Price: Low to High" },
  { code: "priceDesc", label: "Price: High to Low" },
];

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
  const [sortOrder, setSortOrder] = useState<SortOrder>(sortOptions[0]);

  function handleCountClick() {
    setCount((prev) => prev + 1);
  }

  function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }



  function handleSortOrderChange(event: ChangeEvent<HTMLSelectElement>) {
    setSortOrder(sortOptions.find((option) => option.code === event.target.value) || sortOptions[0]);
  }

  const normalizedQuery = query.trim().toLowerCase();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(normalizedQuery),
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder.code === "priceAsc") return a.price - b.price;
    if (sortOrder.code === "priceDesc") return b.price - a.price;
    return 0; // default
  });

  return (
    <div>
      <h2>Product List Practice</h2>
      <Input
        value={query}
        onChange={handleQueryChange}
        placeholder="Search product name"
      />
     
      <select onChange={handleSortOrderChange}>
        <option value={sortOptions[0].code}>Default</option>
        <option value={sortOptions[1].code}>Price: Low to High</option>
        <option value={sortOptions[2].code}>Price: High to Low</option>
      </select>
      <p>Results: {sortedProducts.length}</p>
      {sortedProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        sortedProducts.map((product) => (
          <Info key={product.id} name={product.name} price={product.price} />
        ))
      )}

      <h3>Button Click Count: {count}</h3>
      <button onClick={handleCountClick}>Click me</button>
    </div>
  );
}
