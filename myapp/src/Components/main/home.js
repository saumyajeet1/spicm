import React, { Component } from 'react';
import Carousel from './carousel';
import Des from './description';
import Team from './team';
import My from './images';
import Vider from '../resources/images/kite.mp4'

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                
                    
                <Des/>
                <My/>
                <Team/>
                   
               </div>
        );
    }
}

export default Home;