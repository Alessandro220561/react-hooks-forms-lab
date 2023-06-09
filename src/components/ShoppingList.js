import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItems, setSearchedItems] = useState("");
  
  

  function handleCategoryChange(event) {
    event.preventDefault()
    setSelectedCategory(event.target.value);
  }

  const handleSearchChange = (e) => {
    setSearchedItems(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (searchedItems) return item.name.toLowerCase().includes(searchedItems.toLowerCase())

    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={ onItemFormSubmit }/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={ handleSearchChange } searchedItems={ searchedItems }/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
