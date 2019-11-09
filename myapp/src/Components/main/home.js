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
            <div>
                <Carousel/>    
                <Des/>
                <Infotwo/>
                <My/>
                <Infoone/>
                <Team/>
               </div>
        );
    }
}

export default Home;