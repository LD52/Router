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
import Game from"./vidéos/Game.mp4"; 
import Driver from './vidéos/Driver.mp4';
import TITANS from './vidéos/TITANS.mp4';
import WEDNESDAY from './vidéos/WEDNESDAY.mp4';
import WITCHER from './vidéos/WITCHER.mp4';
import teaser from './vidéos/teaser.mp4';




function App() {

  const [carte] = useState([
    {
        id : 1,

        img : <img src={Baby} alt='baby' className='image'/>,
        title: "Baby Driver", 
        coords : "2017 | 1h 53m",
        video : <video controls src={Driver} className="video" type="video.mp4"/>,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eveniet deserunt voluptas eaque error nesciunt sunt eligendi accusamus, odit, repudiandae iusto harum quibusdam magnam magni distinctio, obcaecati accusantium? Provident, possimus?"
    },
    {
        id : 2,
        img : <img src={Squid} alt='squid' className='image'/>,
        title: "Squid Game", 
        coords : "2017 | 1 season",
        video : <video controls src={Game} type="video.mp4" className='video'/>,
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere officiis modi maiores quo inventore, commodi, esse doloribus voluptatibus dolorem aut autem ducimus voluptatum a perspiciatis libero enim consequuntur. Corporis, libero!"
    },
    {
        id : 3,
        img : <img src={Titans} alt='titans' className='image'/>,
        title: "Titans",
        coords : "2018 | 4 seasons",
        video : <video controls className="video" src={TITANS} type="video.mp4"/>,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, recusandae. Unde earum consequatur enim excepturi voluptate illum voluptatibus facere nisi, nulla, incidunt commodi vero eaque vitae suscipit maxime maiores laudantium."
    },
    {
        id : 4,
        img : <img src={Wednesday} alt="Wednesday" className='image'/>, 
        title: "Wednesday" ,
        coords : "2022 | 1 season",
        video : <video controls src={WEDNESDAY} className="video" type='video.mp4'/>,
        text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente voluptatem ipsa temporibus odio rem obcaecati delectus voluptatum pariatur vel natus nostrum quasi ratione corrupti architecto, assumenda deleniti quis aspernatur facilis?"
    },
    {
        id : 5,
        img : <img src={Witcher} alt="Witcher" className='image'/>, 
        title: "The Witcher",
        coords : "2019 | 2 seasons", 
        video : <video controls src={WITCHER} className="video" type="video.mp4"/>,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maxime ea praesentium error, repudiandae tempora hic odit tempore minima sint qui neque expedita necessitatibus dolorem eligendi accusantium, libero a consectetur."
    },
    {
        id : 6,
        img : <img src={Film} alt="1899" className='image'/>, 
        title: "1899", 
        coords : "2022 | 1 season",
        video: <video src={teaser} controls type='video.mp4' className='video'/>,
        text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque accusamus laborum, atque sint consectetur alias natus modi illo error non illum eum facilis, earum nemo, quia cum fugiat necessitatibus expedita?"
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
