export default function Item({ item, onDeleteItem, onCheckedItem }) {
  return (
    <li>
      {
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onCheckedItem(item.id)}
        />
      }
      <span
        id={item.id}
        key={item.id}
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {item.quantity}: {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
