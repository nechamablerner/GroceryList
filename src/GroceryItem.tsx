import type { GroceryItemType } from "./App";


type GroceryItemProps ={
    item: GroceryItemType;
    onToggle:(id:string) => void;
};

export function GroceryItem({item, onToggle}:  GroceryItemProps){
    return(
        <>
        <div>
            <h6> {item.itemName}</h6>
            <button onClick={() => onToggle(item.id)}>
                {item.bought ? "Bought ✅" : "Not Bought 🛒" }
            </button>
        </div>
        </>
    )
}