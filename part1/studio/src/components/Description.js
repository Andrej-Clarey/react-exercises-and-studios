import React from 'react';
import styles from './Description.module.css';


function RecipeAuthor(){
    let authorLink = "https://www.inspiredtaste.net/15938/easy-and-smooth-hummus-recipe/"
    let authorPhoto = "https://www.inspiredtaste.net/wp-content/uploads/2023/04/Adam-and-Joanne-2-1200.jpg"
    let authorName= "Adam and Joanne"
    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Adam and Joanne" className={styles.imageUpdates}/>
        <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>inspired taste</a>
            </div>    
        </div>
    )

};

class RecipeDescription extends React.Component {
    render() {
       return( <div>
            <div>
                <h1>Easy Hummus</h1>
                <p>Quick Easy and Better than store bought Hummus</p>
            </div>
            <RecipeAuthor/>
        </div>)
    }
}

export default RecipeDescription;