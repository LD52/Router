import './../App.css'; 
import React,{Component} from 'react';
import Card from './Card';
import Menu from './../Vector.png';
import Netflix from './../netflix-logo.png';
import Loupe from './../loupe.png';
import Chevron from './../chevron.png';
import Profile from './../Profile.png';
import Background from './../background.png';
import Star from './../Star.png';
import Play from './../Play.png';
import Trend from './../Trend.png';
import Fire from './../fire.png';
import Plus from './../plus.png';
import Chev from './../Chev.png';
import  Baby from './../Baby-Driver.png';
import Film from './../Film-1899.png';
import Squid from './../Squid-Game.png';
import Titans from './../TITANS.png';
import Wednesday from './../Wednesday.png';
import Witcher from './../Witcher.png';

class Home extends  Component {
    
    state={
        carte: [
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
        ]
    }

    render () {
        return (

 <div className="root">

            <div className='first-root'>

                <div className='top-first'>
                    <div className='first-left'>
                        <img src={Menu} alt="foto"></img>
                    </div>
                    <div className='first-right'>
                        <img src={Netflix} alt='foto'></img>
                    </div>
                </div>

                <div className='top-second'>
                    <div> <h3>Series</h3></div>
                    <div ><h3>Movies</h3></div>
                    <div><h3>Box-office</h3></div>
                    <div><h3>Local</h3></div>
                </div>

                <div className='top-third'>
                    <div className='search'>
                        <img src={Loupe}></img>
                    </div>
                    <div className='text'><h4>e.g </h4>Stranger Things...</div>
                </div>

                <div className='top-last'>
                    <div>
                        <img src={Chevron} className="chevron" alt="chevron"></img>
                    </div>
                    <div><img src={Profile} className=" profile" alt='profile'>
                    </img></div>
                </div>

            </div>

            <div className='second-root' style={{ backgroundImage: `url(${Background}`, backgroundSize: '100% 100%',}}>

                <div className='racine'>

                    <div className='un'>
                        <h4>THRILLER . HORROR . TEEN</h4>
                    </div>
                    <div className='deux'><h1>STRANGER THINGS</h1></div>
                    <div className='trois'>16 +</div>

                    <div className='quatre'>
                        <div className='star'>
                            <img src={Star} alt='star'></img>
                        </div>
                        <div>9.0</div>
                        <div className='star-next'><h4>2019 | Season 3 | 9 Episodes</h4></div>
                    </div>
                    <div className='cinq'> <h4>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</h4></div>

                    <div className='six'>
                        <h4> Starring : Winona Ryder,David Harbour,Millie Bobby Brown</h4>
                    </div>

                    <div className='sept'>

                        <div className='sept-first'>
                            <div className='sept-first-first'>
                                <img src={Play} alt='play'></img>
                            </div>
                            <div className='sept-first-second'>
                                <h3>Watch  Season 3</h3>
                            </div>
                        </div>

                        <div className='sept-second'>
                            <h3>All Seasons</h3>
                        </div>
                    </div>

                </div>
            </div>

            <div className='third-root'>
                <div className='third-first'>
                    <div className='trend'>
                        <img src={Trend} alt='trend' className='img'></img>
                    </div>
                    <div className='trends'> <h4>Trends Now</h4></div>
                </div>

                <div className='third-second'>
                    <div className='note'>
                        <img src={Fire} alt='fire' ></img>
                    </div>
                    <div className='Pop'> <h4>Popular</h4></div>
                </div>

                <div className='third-third'>
                    <div className='add'>
                        <img src={Plus} alt='plus' ></img>
                    </div>
                    <div className='new'> <h4>New</h4></div>
                </div>
            </div>

            <div className='fourth-root'>

                <div className='fourth-top'>
                    <div className='top-un'>
                        <h4> Genre and Type  | </h4>
                    </div>

                    <div className='top-deux'>
                        <div>
                            <h4> Action</h4>
                        </div>
                        <div>
                            <img src={Chev} alt="chev"></img>
                        </div>
                    </div>

                    <div className='top-trois'>
                        <div>
                            <h4> Series </h4>
                        </div>
                        <div>
                            <img src={Chev} alt="chev"></img>
                        </div>
                    </div>
                </div>

            </div>
            <div className='card'>
           
            {this.state.carte.map((carte)=>{
              return (<Card key={carte.id} carte={carte}/>)
            })
        }
            
            </div>


        </div>

        )
    }
}

export default Home;