import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Shoes", quantity: 2, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handlerAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handlerDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handlerCheckedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <Form items={items} onAddingItems={(item) => handlerAddItems(item)} />
      <TravelList
        items={items}
        onDeleteItem={(id) => handlerDeleteItem(id)}
        onCheckedItem={(id) => handlerCheckedItem(id)}
      />
      <Stats />
    </div>
  );
}

function Header() {
  return (
    <>
      <h1>🏝️ FAR AWAY 💼</h1>
    </>
  );
}

function Form({ items, onAddingItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handlerForm(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddingItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handlerForm}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option id={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function TravelList({ items, onDeleteItem, onCheckedItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onCheckedItem={onCheckedItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onCheckedItem }) {
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

function Stats() {
  return (
    <footer className="stats">
      <span>
        <em>💼 You have 0 items on your list, and you already packed 0 (0%)</em>
      </span>
    </footer>
  );
}
