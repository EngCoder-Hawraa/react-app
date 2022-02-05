import React, { Component } from 'react';

class Comp extends Component {
    state = {
        name: 'Comp'
    }
    updateNameState = () => {
        this.setState({
            name: 'Comp2'
        })
    }
    render() {
        return ( <
            div > { this.props.render(this.state.name, this.updateNameState) } <
            /div>
        );
    }
}

export default Comp;