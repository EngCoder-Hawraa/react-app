//rfc function component اختصار يكون 
//rcc class based component اختصار يكون 
import React, { Component } from 'react';
class Header extends Component {
    render() {
        return ( <
            div > { this.props.title } < br / > { this.props.desc } <
            br / > { this.props.newData } <
            /div>
        );
    }
}

export default Header;