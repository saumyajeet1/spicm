import React from 'react';

const Footer = () => {
    return (
        <div className="row footer" style={{background:"grey"}}>
            <div className="row">
            <div className="col-lg-6 email">
                <div className="row">
                    
                <div className=" col-lg-2 title"></div>
                <div className=" col-lg-5 title"><p className="des">Email:-</p></div>
                <div className="col-lg-5 info"><p className="des">xxxxx@gmail.com</p></div>
                </div>
            </div>
            <div className="col-lg-6 contact">
                <div className="row">
                <div className=" col-lg-2 title"></div>
                <div className=" col-lg-5 title"><p  className="des">Contact:-</p></div>
                <div className="col-lg-5 info"><p className="des">1111111111</p></div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-6 title">
                <div className="row">
                <div className=" col-lg-2 title"></div>
                <div className="col-lg-10 title"><p className="des">SPICMACAY</p></div>
                </div>
            </div>
            <div className="col-lg-6 title">
                <div className="row">
                <div className=" col-lg-2 title"></div>
                <div className=" col-lg-10 title"><p className="des">An MHRD Club</p></div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;