import React from 'react';
import first from '../resources/images/1.jpg'
import second from '../resources/images/2.jpg'
import third from '../resources/images/3.jpg'

import Coverflow from 'react-coverflow'
const Team = () => {
    return (
        <div className="row">
        <div className="col-lg-12 col-sm-12 col-md-12 tea">
            <h2 style={{fontFamily:"algerian",textAlign:"center"}}>Meet the Team</h2>
            <Coverflow width="400" height="250"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    clickable={true}
    active={0}
  >
    <div
      role="menuitem"
      tabIndex="0"
    >
      <img
        src={first}
        alt='third'
        style={{
          width: '100%',
        }}
      />
    </div>
    <img src={second} alt='second'/>
    <img src={third} alt='first'/>
  </Coverflow>
        </div>
        </div>
    );
};

export default Team;