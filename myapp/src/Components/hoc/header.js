import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import Logo from '../utils/logo';
import Spiclogo from '../resources/images/logo.png'
import {Link} from 'react-router-dom'
import Rotate from 'react-reveal/Rotate';

const useStyles = makeStyles(theme => ({
    root: {
        '&:hover': {
            opacity:1,
         }
    }
  }));
const Header = () => {
    const classes = useStyles();
    return (
        
      //  <div className="apbar col-lg-12 col-md-12 col-sm-12">
        //  {/* <AppBar        
        //   style={{
            
        //             backgroundColor:'black',
        //             opacity:'0.75',
        //             boxShadow: 'none',
        //             padding:'10px 0',
        //             borderBottom: '2px solid #00285e'
        //         }}
        //         className={classes.root}
        //         >
        //      <Toolbar style={{display:'flex'}}>
        //     <div style={{flexGrow:1}}>
        //     <Logo loc={Spiclogo}/>
        //     </div>
        //     <div>
        //  <Link to="#des">
        //      <Button style={{fontWeight:'800',fontSize:'12px'}} color="inherit">
        //      ABOUT
        //      </Button>
        //  </Link>
        //     </div>
        //     <div>
        //  <Link to="#gallery">
        //      <Button color="inherit" style={{fontWeight:'800',fontSize:'12px'}}>
        //      <a href="#gallery">GALLERY</a>     
        //      </Button>
        //  </Link>
        //     </div>
        //     <div>
        //  <Link to="#myteam">
        //      <Button color="inherit" style={{fontWeight:'800',fontSize:'12px'}}>
        //          <a href="#team">TEAM</a>
        //      </Button>
        //  </Link>
        //     </div>
        //     <div>
        //  <Link to="#contact">
        //      <Button color="inherit" style={{fontWeight:'800',fontSize:'12px'}}>
        //          CONTACT US
        //      </Button>
        //  </Link>
        //     </div>
        //      </Toolbar>
        //  </AppBar>
        // */}
        // <Rotate top right>
        // <h1 className="titl">UTTARAYAN</h1>
        // </Rotate>
        <div> </div>

    );
};

export default Header;