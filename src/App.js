import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Spaceships from './components/Spaceships';
import STAR_WARS_API from './services/constants';

function App() {
    const [ship, setShip] = useState([]);

  useEffect(()=>{
    async function Starships() { await axios.get(STAR_WARS_API).then(res => {
      const shipData = res.data.results
      //console.log(shipData)
      return setShip(shipData);
  })
  }
Starships()},[])

  //console.log(ship)

  return (
    <div className="App">
      <Header />
      <Spaceships ships={ship} newShip={setShip} />
    </div>
  );
}

export default App;
