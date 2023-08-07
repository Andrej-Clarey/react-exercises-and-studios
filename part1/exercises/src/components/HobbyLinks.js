export default function HobbyLinks () {
    const hobby = ["https://magic.wizards.com/en","https://diablo4.blizzard.com/en-us/"]
       return <div>
          <h3>Links to my Hobies</h3>
          <ol>
             <li><a href = {hobby[0]}>MTG</a></li>
             <li><a href = {hobby[1]}>D4</a></li>
          </ol>
       </div>
};
 
//  export default HobbyLinks;