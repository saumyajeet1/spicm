import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import Logo from '../utils/logo';
import Spiclogo from '../resources/images/logo.png'
import {Link} from 'react-router-dom'
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
        <div className="apbar col-lg-12 col-md-12 col-sm-12">
         <AppBar        
          style={{
            
                    backgroundColor:'black',
                    opacity:'0.75',
                    boxShadow: 'none',
                    padding:'10px 0',
                    borderBottom: '2px solid #00285e'
                }}
                className={classes.root}
                >
             <Toolbar style={{display:'flex'}}>
            <div style={{flexGrow:1}}>
            <Logo loc={Spiclogo}/>
            </div>
            <div>
         <Link to="#des">
             <Button style={{fontWeight:'800',fontSize:'12px'}} color="inherit">
             ABOUT
             </Button>
         </Link>
            </div>
            <div>
         <Link to="#image">
             <Button color="inherit" style={{fontWeight:'800',fontSize:'12px'}}>
                 GALLERY
             </Button>
         </Link>
            </div>
            <div>
         <Link to="#myteam">
             <Button color="inherit" style={{fontWeight:'800',fontSize:'12px'}}>
                 TEAM
             </Button>
         </Link>
            </div>
            <div>
         <Link to="#contact">
             <Button color="inherit" style={{fontWeight:'800',fontSize:'12px'}}>
                 CONTACT US
             </Button>
         </Link>
            </div>
             </Toolbar>
         </AppBar>
        </div>
    );
};

export default Header;