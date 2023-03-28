import './../App.css';
import React from 'react';
import {Link} from 'react-router-dom';


function Card (props) {
  
        return(
            <div className='under-card'>
             <div className='card-top'> <Link to={`Details/${props.carte.id}`}> {props.carte.img} </Link>  
            </div>
            <div className='card-bottom-first'>
                <h3>{props.carte.title}</h3>
            </div>
            <div className='card-bottom-second'>
                <h5>{props.carte.coords}</h5>
            </div>
            </div>
        );
    }


export default Card;