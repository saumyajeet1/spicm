import React, { Component } from 'react';
import Flip from 'react-reveal/Flip';
import i4 from "../resources/images/4.jpg"
import i5 from "../resources/images/5.jpg"
import i6 from "../resources/images/6.jpg"
import i7 from "../resources/images/7.jpg"
import i8 from "../resources/images/8.jpg"
import i9 from "../resources/images/9.jpg"
import i10 from "../resources/images/10.jpg"
import i11 from "../resources/images/11.jpg"
import i12 from "../resources/images/12.jpg"

class images extends Component {
    render() {
        return (
          
<div className="row" id="gallery" style={{maxWidth:"800px", margin:"auto"}}>
<Flip right>            
                <div className="row">
                  <div>
                 
                <h3 style={{fontFamily:"algerian",textAlign:"center",fontWeight:"800",fontSize:"50px",color:"#800000"}}>GALLERY</h3>
                </div>
  <div className="col-lg-12 col-md-12 col-sm-12 tea">
      
    <div id="mdb-lightbox-ui"></div>

    <div className="mdb-lightbox no-margin">

      <figure className="col-sm-4 col-md-4">
        <a href={i4} data-size="1600x1067">
          <img alt="picture" src={i4} id="pics"
            className="img-fluid"/>
        </a>
      </figure>

      <figure className="col-md-4 col-sm-4">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg" data-size="1600x1067">
          <img alt="picture" src={i5}
            className="img-fluid" id="pics" />
        </a>
      </figure>

      <figure className="col-md-4 col-sm-4">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg" data-size="1600x1067">
          <img alt="picture" src={i6}
            className="img-fluid" id="pics" />
        </a>
      </figure>

      <figure className="col-md-4 col-sm-4">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg" data-size="1600x1067">
          <img alt="picture" src={i7}
            className="img-fluid" id="pics" />
        </a>
      </figure>

      <figure className="col-md-4 col-sm-4">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg" data-size="1600x1067">
          <img alt="picture" src={i8}
            className="img-fluid" id="pics" />
        </a>
      </figure>

      <figure className="col-md-4 col-sm-4">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg" data-size="1600x1067">
          <img alt="picture" src={i9}
            className="img-fluid" id="pics" />
        </a>
      </figure>

      <figure className="col-md-4 col-sm-4">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg" data-size="1600x1067">
          <img alt="picture" src={i10}
            className="img-fluid"  id="pics"/>
        </a>
      </figure>

      <figure className="col-md-4 col-sm-4">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg" data-size="1600x1067">
          <img alt="picture" src={i11}
            className="img-fluid"  id="pics"/>
        </a>
      </figure>

      <figure className="col-md-4 col-sm-4">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg" data-size="1600x1067">
          <img alt="picture" src={i12}
            className="img-fluid" id="pics"/>
        </a>
      </figure>

    </div>

  </div>
</div>
</Flip>
</div>
            
        );
    }
}

export default images;