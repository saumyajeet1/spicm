import React from 'react';
import Bounce from 'react-reveal/Bounce';

const Infoone = () => {
    return (

        <div className="infoone row" style={{maxWidth:"800px", margin:"auto"}}>
        <Bounce duration={3000}>
            <div className="col-lg-12" id="write">
            <p></p>
            <p></p>
            <p></p>
            <p>        </p>
            <p></p>
                <p>    </p>
                
                <p style={{textAlign:"center" ,fontSize:"30px",color:"yellow"}}>Do You Know?? </p>
                <br></br>
                <p style={{textAlign:"center"}}>The largest number of kites flown </p>
                <p style={{textAlign:"center"}}>on a single line is 11,284,</p>
                <p style={{textAlign:"center"}}>this record is held by a Japanese</p>
                <p style={{textAlign:"center"}}>kite maker.</p>
         
            </div>
            </Bounce>
        </div>
    );
};

export default Infoone;