
import './App.css'
import { useState, useEffect } from "react";
import { GroceryForm } from './GroceryForms';
import { GroceryList } from './GroceryList';
import { Header } from './Header';
import { Footer } from './Footer';



export interface GroceryItemType{
    id: string;
    itemName: string;
    bought: boolean;
}

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
useEffect(() => {
  try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

function App() {
  const [items, setItems] = useLocalStorage<GroceryItemType[]>(
    "grocery-items", 
    []
  );
  //  const [items, setItems] = useState<GroceryItemType[]>([]);  

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
