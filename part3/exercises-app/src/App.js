import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './components/Introduction';
import MyProject from './components/Projects';

function App() {
  return (<div className = "App">
   <h1 className="header">My Hobby:Diablo 4</h1>
   <HobbyIntroduction/>
   <MyProject/>
   </div>
  );
}

export default App;
