import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  
  

  function handleCategoryChange(event) {
    event.preventDefault()
    setSelectedCategory(event.target.value);
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (search) return item.name.toLowerCase().includes(search.toLowerCase())

    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={ onItemFormSubmit }/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={ handleSearchChange } search={ search }/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
