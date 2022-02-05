import React, { Component } from 'react';

class RenderProps extends Component {
    state = {
        name: 'RenderProps Hawraa'
    }
    render() {
        return ( <
            div > { this.props.hawraa(this.state.name, 'Arkan') } <
            /div>
        );
    }
}

export default RenderProps;