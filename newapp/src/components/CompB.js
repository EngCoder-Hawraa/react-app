import React, { Component } from 'react';
class CompB extends Component {
    render() {
        const { name, updateNameState } = this.props;
        return ( <
            div > { name } <
            button onClick = { this.props.updateNameState } > Update Name < /button> < /
            div >
        );
    }
}

export default CompB;