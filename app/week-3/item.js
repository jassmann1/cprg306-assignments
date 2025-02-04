const Item = ({ name, quantity, category }) => (
  <li className="mb-4">
    <span className="text-lg font-semibold">{name}</span>
    <div className="flex items-center text-sm text-gray-600">
      <span>
        Quantity: <span className="font-medium">{quantity}</span>
      </span>
      <span
        className={`ml-4 ${
          category === "dairy"
            ? "text-blue-500"
            : category === "produce"
              ? "text-green-500"
              : category === "meat"
                ? "text-red-500"
                : "text-gray-500"
        }`}
      >
        {category}
      </span>
    </div>
  </li>
);

export default Item;
