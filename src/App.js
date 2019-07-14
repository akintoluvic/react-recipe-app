import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const APP_ID = "4b8833db";
  const APP_KEY = "455209e5c0a5870189c6a73719e5a19a";

  const exampleReq = 
  `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    console.log('effect has been run')
  }, []);

  return ( 
    <div className='App'>
      <h1>Recipe App</h1>
      <form className="search-form">
        <input type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
   );
}
 
export default App;

