// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {

  const [items, setItems] = useState([
    {id: 1, name: "Milk"},
    {id: 2, name: "Cheese"},
    {id: 3, name: "Beans"}
  ])

  const [newItem, setNewItem] = useState("")

  const handleItemInput = (evt) => {
    setNewItem(evt.target.value)
  }

  const saveNewItem = (evt) => {
    evt.preventDefault()
    const newItemObj = {id: Date.now(), name: newItem}
    const newListOfItems = [...items, newItemObj]
    setItems(newListOfItems)
    setNewItem("")
  }

  const purchaseItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const shoppingListItems = items.map((item) => {
    return (
    <li key={item.id}>
      {item.name}
      <button onClick={() => purchaseItem(item.id)}>Purchase</button>
    </li>
    )
  })

  return (
      <div className="App">
        {/* shorthand if statement (AKA ternary) - <boolean condition> ? Do This if True: Do this if false */}
        <h1>Shopping List - {items.length ? "Get to it" : "Finished"}</h1>
        <hr></hr>

        <ul>
          {shoppingListItems}
        </ul>

        <form onSubmit={saveNewItem}>
          <label htmlFor="new-item">Item Name</label>
          <input id="new-item" type="text" value={newItem} onChange={handleItemInput}></input>
          <input type="submit" value="Save New Item"></input>
        </form>
      </div>  
  );
}

export default App;
