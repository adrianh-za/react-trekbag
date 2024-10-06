import { createContext, useEffect, useState } from 'react'
import { initialItems } from "../lib/constants.js";

export const ItemsContext = createContext();

export const ItemsContextProvider = ({children}) => {
  const [items, setItems] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    return storedItems.length ? storedItems : initialItems;
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleAddItem = (text) => {
    const newItem = {
      id: new Date().getTime(),
      name: text,
      packed: false
    };

    setItems((prevItems) => {
      return [...prevItems, newItem]
    });
  }

  const handleRemoveAllItems = () => {
    setItems([]);
  }

  const handleResetItems = () => {
    setItems(initialItems);
  }

  const handleAllPacked = (isPacked) => {
    setItems((prevItems) => {
      return prevItems.map(item => {
        return {...item, packed: isPacked}
      });
    });
  }

  const handleRemoveItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter(item => item.id !== id);
    });
  }

  const handleItemPackedToggle = (id) => {
    setItems((prevItems) => {
      return prevItems.map(item => {
        if (item.id === id) {
          return {...item, packed: !item.packed}
        }
        return item;
      });
    });
  }

  return (
    <ItemsContext.Provider value={
      {
        items,
        handleAddItem,
        handleRemoveAllItems,
        handleResetItems,
        handleAllPacked,
        handleRemoveItem,
        handleItemPackedToggle
      }}>
      {children}
    </ItemsContext.Provider>
  )
}
