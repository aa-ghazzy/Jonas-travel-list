import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import TravelList from "./TravelList";
import Stats from "./Stats";

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

  function handlerClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form items={items} onAddingItems={(item) => handlerAddItems(item)} />
      <TravelList
        items={items}
        onDeleteItem={(id) => handlerDeleteItem(id)}
        onCheckedItem={(id) => handlerCheckedItem(id)}
        handlerClearList={handlerClearList}
      />
      <Stats items={items} />
    </div>
  );
}
