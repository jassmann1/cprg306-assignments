// /app/week-3/item.js
export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 border-b">
      <span className="font-bold">{name}</span>
      <span className="text-gray-500">
        {" "}
        - {quantity} {category}
      </span>
    </li>
  );
}
