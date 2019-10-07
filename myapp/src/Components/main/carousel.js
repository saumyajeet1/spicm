import React from 'react';
import first from '../resources/images/1.jpg'
import second from '../resources/images/2.jpg'
import third from '../resources/images/3.jpg'
const Carousel = () => {
    return (
        
<div className="container col-lg-12 col-sm-12 col-md-12" style={{height:"500px"}}>
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner">
      <div className="item active">
        <img src={first}  style={{width:'100%'}}/>
      </div>

      <div className="item">
        <img src={second}  style={{width:'100%'}}/>
      </div>
    
      <div className="item">
        <img src={third} style={{width:'100%'}}/>
      </div>
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>

    );
};

export default Carousel;