import data from '../data.json';
import {useState} from 'react';

export default function MyProject(){
  const [index, setIndex] = useState(0);
  const projects = data.projects;
  function handleClick() {
    if (index < data.projects.length-1)
    {
       setIndex(index + 1);
    }
    else 
    {
       setIndex(0);
    }
 }
 return(
  <div>
    <button onClick={handleClick}>Next</button>
    <h2>{projects[index].character}</h2>
    <p>{projects[index].charType}</p>
    <img src={projects[index].photoUrl} alt={projects[index].alt}/>
  </div>
 )
}