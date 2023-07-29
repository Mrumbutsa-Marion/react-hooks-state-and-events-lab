import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
const [darkTheme, setDarkTheme] = useState(false)
  function handleClick(){
    setDarkTheme(!darkTheme);
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const topNode = darkTheme ? "App dark" : "App light"
  const darkMode = darkTheme? "Light Mode" : "Dark Mode"
  return (
    <>
    
    <div className={topNode}>
      <header>
        {/* <h2>Shopster</h2>
        <div className="App light">
        <button onClick={handleClick}>
          {darkMode}
        </button>
</div> */}
{/* <div className="App dark">
<button>Dark Mode</button>
</div> */}
<h2>Shopster</h2>
<button onClick={handleClick}>{darkMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
    </>
  );
}

export default App;
