import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
  const [tabe,setTabe]=useState({
    message:["Hyyy! this is the First Tab","You make it to 2nd tab","Third Tab!"],
  })
  return (
    <div className="App">
      <Tabs tabe={tabe} setTabe={setTabe}/>
    </div>
  )
}

export default App;
