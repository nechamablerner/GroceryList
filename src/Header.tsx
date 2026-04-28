import styles from './Header.module.css'

export function Header(){
    return(
        <header className ={styles.header}>
            <h1> Grocery List</h1>
            <p>This interactive grocery list helps you stay organized while you shop.</p>
            <p>To add an item, simply type it in and click "Add Item."</p>
            <p>Easily mark items as bought with a single tap, or remove them from your list when you no longer need them.</p>
            <p>Happy Shopping!</p>
        </header>
    )
}