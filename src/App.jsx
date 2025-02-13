import Bracket from "./components/composition/Bracket"; // Ensure correct import
import Emoji from "./components/composition/Emoji";
import Text from "./components/composition/Text"; // Ensure correct import
function App() {
   return ( 
     <Emoji>
        {({ addEmoji }) =>(
            <Bracket>
               {({addBracket})=><Text addEmoji = {addEmoji} addBracket = {addBracket}/>  }
            </Bracket>
        )}
     </Emoji>
   );
}

export default App;
