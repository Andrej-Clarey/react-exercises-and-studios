import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label:"Reddit", value:"food is good"}, {label:"Pintrest", value:"food for safty pins"}, {label:"Linkdin", value:"put your food to work"}];

   const [boardName, setBoardName] = useState('no boards yet')

   // function boardInformation(){
   //    const boardInfo = (boards) =>{
   //       return boards.map((board)=><li key={board.index}>{board}</li>);
   //    }
   //    return<ul>{boardInfo(boards)}</ul>
   // }
   const handleChange = (event) => {
      setBoardName(event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board) => (<option value={board.value}>{board.label}</option>))}
      
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}