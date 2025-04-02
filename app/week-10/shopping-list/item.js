function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="cursor-pointer hover:bg-gray-100 p-2"
    >
      {name}, {quantity} ({category})
    </li>
  );
}

export default Item;
