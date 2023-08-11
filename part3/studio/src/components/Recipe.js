const RecipeAuthor = () => {
   let authorLink = "https://therecipecritic.com/easy-shrimp-tacos/";
   let authorPhoto = "https://therecipecritic.com/wp-content/uploads/2019/01/alyssa-kitchen.jpg";
   let authorName = "Alyssa Rivers";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Shrimp", "Olive Oil", "Seasonings", "Flour Tortillas", "Toppings"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Easy Shrimp Tacos</h1>
            <p>Happy Friday! I’m here to bring you another easy and delicious dinner that’s a great timesaver for busy families! I love tacos. You just can’t go wrong with them! Everyone will be happy because they can choose their own toppings, and they’re fun to eat as well.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://therecipecritic.com/wp-content/uploads/2022/12/shrimp_tacos-750x1000.jpg" alt="Tasty Shrimp Taco" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}