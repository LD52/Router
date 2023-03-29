import "./../App.css";
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import Netflix from './../images/netflix.png';
import Play from './../images/Play.png';
import Plus from './../images/plus.png';

function Details({ carte }) {
    let id = useParams().id;
    let film = carte.find((elt) => {
        return elt.id == id;
    })
    return (
        <div className='detail-base'>
            <div className="detail-button">
                <Link to='/'><img src={Netflix} alt="netflix" className="netflix"></img></Link>
            </div>
            <div className="detail-card">
                <div className="detail-card-top">
                    <div className="detail-card-left">{film.video} </div>
                    <div className="detail-card-right">
                        <div className="first-detail">{film.text}</div>
                        <div className="last-detail">
                            <div className="last-left">
                                <img src={Play} alt="play" />
                            </div>
                            <div className="last-right">
                                <img src={Plus} alt="plus" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </div>


    );
}
export default Details;