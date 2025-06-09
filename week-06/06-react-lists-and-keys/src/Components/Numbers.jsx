import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([
    { id: 0, title: "Turnip" },
    { id: 1, title: "Artichoke" },
    { id: 2, title: "test!" },
  ]);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.length ? (
          items.map((item) => <li key={item.id}>{item.title}</li>)
        ) : (
          <li>No items</li>
        )}
      </ul>
    </div>
  );
}
