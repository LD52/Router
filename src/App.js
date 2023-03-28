import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Details from './Component/Details';
import { useState } from 'react';
import  Baby from './images/Baby-Driver.png';
import Film from './images/Film-1899.png';
import Squid from './images/Squid-Game.png';
import Titans from './images/TITANS.png';
import Wednesday from './images/Wednesday.png';
import Witcher from './images/Witcher.png';

function App() {

  const [carte] = useState([
    {
        id : 1,
        img : <img src={Baby} alt='baby' className='image'/>,
        title: "Baby Driver", 
        coords : "2017 | 1h 53m",
    },
    {
        id : 2,
        img : <img src={Squid} alt='squid' className='image'/>,
        title: "Squid Game", 
        coords : "2017 | 1 season",
    },
    {
        id : 3,
        img : <img src={Titans} alt='titans' className='image'/>,
        title: "Titans",
        coords : "2018 | 4 seasons",
    },
    {
        id : 4,
        img : <img src={Wednesday} alt="Wednesday" className='image'/>, 
        title: "Wednesday" ,
        coords : "2022 | 1 season",
    },
    {
        id : 5,
        img : <img src={Witcher} alt="Witcher" className='image'/>, 
        title: "The Witcher",
        coords : "2019 | 2 seasons", 
    },
    {
        id : 6,
        img : <img src={Film} alt="1899" className='image'/>, 
        title: "1899", 
        coords : "2022 | 1 season",
    }
]);
 


  return (
    < div className='App'>
      <Routes>
        <Route path='/' element={<Home carte={carte}/>} />
        <Route path='/Details/:id' element={<Details carte={carte}/>} />  
      </Routes>
    </div>

  );
}

export default App;
