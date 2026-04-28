import type { GroceryItemType } from "./App";


type GroceryItemProps ={
    item: GroceryItemType;
    onToggle:(id:string) => void;
    onDelete:(id:string) => void;
};

export function GroceryItem({item, onToggle, onDelete}:  GroceryItemProps){
    return(
        <>
        <div>
            <h6> {item.itemName}</h6>
            <button onClick={() => onToggle(item.id)}>
                {item.bought ? "Bought ✅" : "Buy 🛒" }
            </button>
            <button onClick ={() =>onDelete(item.id)} >
                Delete 🗑️
            </button>
        </div>
        </>
    )
}