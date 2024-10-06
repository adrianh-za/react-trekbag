import Button from "./Button.jsx";
import { createRef, useEffect, useState } from "react";
import { useItemsContext } from "../lib/hooks.js";

const Sidebar = () => {

  const { handleAddItem } = useItemsContext();

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem}/>
      <ButtonGroup />
    </div>
  )
}

export default Sidebar;

const AddItemForm = ({onAddItem}) => {
  const [itemText, setItemText] = useState("");
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (event) => {

    event.preventDefault();

    if (!itemText) {
      alert("Please enter an item");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);

    setItemText("");
    inputRef.current.focus();
  }

  const handleChange = (event) => {
    setItemText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={handleChange}
      />
      <Button>Add to list</Button>
    </form>
  )
}

const ButtonGroup = () => {

  const {handleAllPacked, handleResetItems, handleRemoveAllItems} = useItemsContext();

  const secondaryButtons = [
    {text: "Mark all as complete", action: () => handleAllPacked(true)},
    {text: "Mark all as incomplete", action: () => handleAllPacked(false)},
    {text: "Reset to initial", action: handleResetItems},
    {text: "Remove all items", action: handleRemoveAllItems}
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button, index) => {
        return (
          <Button
            key={index}
            buttonType="secondary"
            onClick={button.action}>
            {button.text}
          </Button>
        )
      })}
    </section>
  )
}