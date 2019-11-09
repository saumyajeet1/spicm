import React, { Component } from 'react';
import Carousel from './carousel';
import Des from './description';
import Team from './team';
import My from './images';
import Infoone from './infoone';
import Infotwo from './infotwo';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-2">                                </div>
            <div  style={{maxWidth:"900px",margin:"auto",border:"2px solid black",background:"#00FF7F"}}>
                <Carousel/>    
                <Des/>
                <Infotwo/>
                <My/>
                <Infoone/>
                <Team/>
               </div>
               
               <div className="col-lg-2"></div>
               </div>
               
        );
    }
}

export default Home;