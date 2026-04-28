import React, { useState } from "react";

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
                <input value = {inputValue} onChange={handleChange}/>
            </label>
            <button type="submit">Submit</button>
            
        </form>
        
    )
}