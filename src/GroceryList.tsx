import { GroceryItem } from "./GroceryItem";
import type  {GroceryItemType  } from "./App";

type GroceryItemProps ={
    items: GroceryItemType[];
    onToggle: (id: string) => void;

};

export function GroceryList({items, onToggle}: GroceryItemProps ){    
    return(
        <main> 
            <h4> Grocery List</h4>
            {items.map((item) =>(
                <GroceryItem key = {item.id} item={item} onToggle={onToggle} />

            ))}
        </main>
    );
}