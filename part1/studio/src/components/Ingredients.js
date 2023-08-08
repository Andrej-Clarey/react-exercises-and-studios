import styles from './Ingredients.module.css';

export default function RecipeIngredients(){
    let ingredients = ["1(15oz) can of chickpeas", "1/4 cup tahini", "1/4 cup fresh lemon juice", "2 cloves of garlic", "2 Tbps of olive oil"];

    return(<div>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
        </ul>
    </div>)
}