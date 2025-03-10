"use client";

export default function Item({ item }) {
  return (
    <li className="border p-2 mb-1">
      {item.quantity} x {item.name} ({item.category})
    </li>
  );
}
