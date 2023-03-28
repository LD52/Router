import "./../App.css";
import {Link, useParams} from 'react-router-dom';
import React from 'react';


function Details ({carte}) {
    let id = useParams().id;
    let film = carte.find((elt) => {
        return elt.id == id;
    })
    return (
        <div className='détail-base'>
          <button className='détail-button'>
            <Link to='/'>Retour</Link>
        </button>
        
       
      <div className='under-card'> <div className='card-top'>  {film.img}  
            </div>
            <div className='card-bottom-first'>
                <h3>{film.title}</h3>
            </div>
            <div className='card-bottom-second'>
                <h5>{film.coords}</h5>
        </div>    
        </div> 
        </div>
    );
}
export default Details;