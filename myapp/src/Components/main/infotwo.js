import React from 'react';
import Bounce from 'react-reveal/Bounce';

const Infotwo = () => {
    return (
        <div className="infoone row">
            <Bounce cascade duration={3000}>
            <div className="col-lg-12" id="write">
            <p></p>
            <p></p>
            <p></p>
            <p>        </p>
            <p></p>
                <p>    </p>
                
                <p style={{textAlign:"center" ,fontSize:"30px",color:"yellow"}}>Do You Know?? </p>
                <br></br>
                <p style={{textAlign:"center"}}>The longest kite </p>
                <p style={{textAlign:"center"}}>in the world is</p>
                <p style={{textAlign:"center"}}>1034 metre</p>
                <p style={{textAlign:"center"}}>3394 feet.</p>
         
            </div>
            </Bounce>
        </div>
    );
};

export default Infotwo;