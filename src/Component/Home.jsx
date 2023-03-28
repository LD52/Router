import './../App.css'; 
import React,{Component} from 'react';
import Card from './Card';
import Menu from './../images/Vector.png';
import Netflix from './../images/netflix-logo.png';
import Loupe from './../images/loupe.png';
import Chevron from './../images/chevron.png';
import Profile from './../images/Profile.png';
import Background from './../images/background.png';
import Star from './../images/Star.png';
import Play from './../images/Play.png';
import Trend from './../images/Trend.png';
import Fire from './../images/fire.png';
import Plus from './../images/plus.png';
import Chev from './../images/Chev.png';


class Home extends  Component {
    
    

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

            <div className='second-root' >  
            {/* style={{ backgroundImage: `url(${Background}`, backgroundSize: '100% 100%',}} */}

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
           
            {this.props.carte.map((carte)=>{
              return (<Card key={carte.id} carte={carte}/>)
            })
        }
            
            </div>


        </div>

        )
    }
}

export default Home;