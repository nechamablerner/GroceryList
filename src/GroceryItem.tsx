import type { GroceryItemType } from "./App";
import styles from "./Items.module.css"


type GroceryItemProps ={
    item: GroceryItemType;
    onToggle:(id:string) => void;
    onDelete:(id:string) => void;

};

export function GroceryItem({item, onToggle, onDelete}:  GroceryItemProps){
    return(
        <>
        <div className={styles.itemCard}>
            <h6 className={styles.itemTitle}> {item.itemName}</h6>
           <div className={styles.button}>
                <button onClick={() => onToggle(item.id)}>
                    {item.bought ? "Bought ✅" : "Buy 🛒" }
                </button>
                <button onClick ={() =>onDelete(item.id)} >
                Delete 🗑️
                </button>
            </div>
        </div>
        </>
    )
}