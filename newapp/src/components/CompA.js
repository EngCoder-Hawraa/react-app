import React, { Component } from 'react';
class CompA extends Component {
    render() {
        const { name, updateNameState } = this.props;
        return ( <
            div > { this.props.test } { name } <
            button onClick = { this.props.updateNameState } > Update Name < /button> < /
            div >
        );
    }
}

export default CompA;