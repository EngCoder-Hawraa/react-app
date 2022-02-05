//rfc function component اختصار يكون 
//rcc class based component اختصار يكون 
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return ( <
            div > { this.props.title } <
            /div>
        );
    }
}

export default Footer;