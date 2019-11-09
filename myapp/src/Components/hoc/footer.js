import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
  

const Footer = () => {
    return (
        <div className="row footer" style={{background:"black",opacity:"0.7"}}>
            <div className="row">
            <div className="col-lg-6 email">
                <div className="row">
                    
                <div className=" col-lg-2 title"></div>
                <div className=" col-lg-5 title"><p className="des" style={{fontFamily:"algerian",fontSize:"25"}}><FontAwesomeIcon icon={faEnvelope} className="icon"/>Email:-</p></div>
                <div className="col-lg-5 info"><p className="des">xxxxx@gmail.com</p></div>
                </div>
            </div>
            <div className="col-lg-6 contact">
                <div className="row">
                <div className=" col-lg-2 title"></div>
                <div className=" col-lg-5 title"><p  className="des" style={{fontFamily:"algerian",fontSize:"25"}}> <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icon"
                                />
                                Contact:-</p></div>
                <div className="col-lg-5 info"><p className="des" style={{fontFamily:"algerian",fontSize:"25"}}>1111111111</p></div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-6 email">
                <div className="row">
                    
                <div className=" col-lg-2 title"></div>
                <div className=" col-lg-5 title"><p className="des" style={{fontFamily:"algerian",fontSize:"25"}}><FontAwesomeIcon icon={faInstagram} className="icon"/> Insatgram:-</p></div>
                <div className="col-lg-5 info"><p className="des" style={{fontFamily:"algerian",fontSize:"25"}}>xxxxx@gmail.com</p></div>
                </div>
            </div>
            <div className="col-lg-6 contact">
                <div className="row">
                <div className=" col-lg-2 title"></div>
                <div className=" col-lg-5 title"><p  className="des" style={{fontFamily:"algerian",fontSize:"25"}}> <FontAwesomeIcon
                                    icon={faFacebook}
                                    className="icon"
                                />
                                Facebook:-</p></div>
                <div className="col-lg-5 info"><p className="des" style={{fontFamily:"algerian",fontSize:"25"}}>1111111111</p></div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-6 title">
                <div className="row">
                <div className=" col-lg-2 title"></div>
                <div className="col-lg-10 title"><p className="des" style={{fontFamily:"algerian",fontSize:"35"}}>SPICMACAY</p></div>
                </div>
            </div>
            <div className="col-lg-6 title">
                <div className="row">
                <div className=" col-lg-2 title"></div>
                <div className=" col-lg-10 title"><p className="des" style={{fontFamily:"algerian",fontSize:"35"}}>An MHRD Club</p></div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;