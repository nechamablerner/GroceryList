import React, { useState } from "react";
import styles from './form.module.css'

type GroceryFormProps = {
    onAdd: (item: string) => void
};


export function GroceryForm({onAdd}: GroceryFormProps){
    const [inputValue, setInputValue] = useState("");
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    const handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmed = inputValue.trim();
        if(!trimmed) return;
        onAdd(trimmed);
        setInputValue("");
    };

    return(
        
        <form onSubmit={handleSubmit}>
            <label>
                Enter item to add to list: 
                <input className={styles.itemInput}
                value = {inputValue} onChange={handleChange}/>
            </label>
            <button type="submit" className={styles.submitButton}>Add Item</button>
            
        </form>
        
    )
}