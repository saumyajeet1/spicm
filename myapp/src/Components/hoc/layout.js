import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
    return (
        <div className="row">
        <Header/>
        {props.children}
        
        </div>
    );
};

export default Layout;