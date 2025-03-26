export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add items to the list 🚀</em>
      </p>
    );

  let itemNums = items.length;
  let itemPackedNums = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <span>
        <em>
          {itemNums === itemPackedNums
            ? "You packed everything and ready to go 😎"
            : `💼 You have ${itemNums} items on your list, and you already packed
          ${itemPackedNums} (${Math.floor(
                (itemPackedNums / itemNums) * 100
              )}%)`}
        </em>
      </span>
    </footer>
  );
}
