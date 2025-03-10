"use client";

export default function ItemList({ items }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Shopping List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="border p-2 mb-1">
            {item.quantity} x {item.name} ({item.category})
          </li>
        ))}
      </ul>
    </div>
  );
}
