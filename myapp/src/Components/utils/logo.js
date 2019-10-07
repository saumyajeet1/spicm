import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';


class Logo extends Component {
    render() {
        return (
            <div className="pic">
            <Avatar src={this.props.loc} style={{margin:'10px'}} />
            </div>
        );
    }
}

export default Logo;