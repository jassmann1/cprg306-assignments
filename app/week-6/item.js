export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 my-2">
      <strong>{name}</strong> - {quantity} ({category})
    </li>
  );
}
