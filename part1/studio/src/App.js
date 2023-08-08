import logo from './logo.svg';
import './App.css';
import RecipeDescription from './components/Description';
import RecipeIngredients from './components/Ingredients';
import RecipePhoto from './components/Photo';

function App() {
  return (
    <div className="App">
      <div className="food">
      <RecipeIngredients/>
        <RecipePhoto/>
        </div>
        <div className='author'>
          <RecipeDescription/>         
        </div>
      
    </div>

  );
}

export default App;
