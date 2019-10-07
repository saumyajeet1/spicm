import React, { Component } from 'react';
import Carousel from './carousel';
import Des from './description';
import Team from './team';

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel/>
                <div className="row">
                    <br></br>
                <Des/>
                </div>
                <div className="row">
                    <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br></br><br></br><br></br>
                <Team/>
                </div>
            </div>
        );
    }
}

export default Home;