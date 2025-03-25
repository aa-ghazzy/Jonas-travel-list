import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Shoes", quantity: 2, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <TravelList />
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

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function formHandler(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={formHandler}>
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

function TravelList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span
        id={item.id}
        key={item.id}
        style={item.packed ? { textDecoration: "line-through" } : {}}
      >
        {/* {<input type="checkbox" />} */}
        {item.quantity}: {item.description}
      </span>
      <button>❌</button>
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
