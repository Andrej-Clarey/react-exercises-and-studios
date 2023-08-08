import './styles.css';

function Button() {
const onLearnMore = () =>(
   alert("Splish Splash!")
)
   return ( 
         <button OnClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;