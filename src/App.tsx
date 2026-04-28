
import './App.css'
import { useState } from "react";
import { GroceryForm } from './GroceryForms';
import { GroceryList } from './GroceryList';
import { Header } from './Header';
import { Footer } from './Footer';


export interface GroceryItemType{
    id: string;
    itemName: string;
    bought: boolean;
}

function App() {
  const [items, setItems] = useState<GroceryItemType[]>([]);  
 
  const handleAddItem = (name:string)=>{
    const newItem: GroceryItemType= {
      id: Math.random().toString(),
      itemName: name,
      bought:false,
    };
    setItems((prev) => [...prev, newItem]);
  }; 
  
  const toggleItem = (id: string) =>{
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
        ?{...item, bought: !item.bought}
        : item
      ));
  };

  const deleteItem =(id: string) =>{
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <>
    <Header/>
    <GroceryForm onAdd={handleAddItem}/>
    <GroceryList items={items} 
      onToggle={toggleItem}
      onDelete={deleteItem}
    />
    {items.length === 0 && <p> No items added yet</p>}
    <Footer/>
    </>
  );
}

export default App
