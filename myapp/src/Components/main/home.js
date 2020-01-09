import React, { Component } from 'react';
import Carousel from './carousel';
import Des from './description';
import My from './images';
import Infoone from './infoone';
import Infotwo from './infotwo';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-2">                                </div>
            <div  id="bodi" style={{maxWidth:"900px",margin:"auto",border:"2px solid black"}}>
                <Carousel/>    
                <Des/>
                <Infotwo/>
                <My/>
                <Infoone/>
            
               </div>
               
               <div className="col-lg-2"></div>
               </div>
               
        );
    }
}

export default Home;