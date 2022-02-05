import React, { Component } from 'react';
const withComp = (OrgComp) => {
    return class NewComp extends Component {
        state = {
            name: 'Comp'
        }
        updateNameState = () => {
            this.setState({
                name: 'Comp2'
            })
        }
        render() {
            return <OrgComp name = { this.state.name }
            updateNameState = { this.updateNameState } {...this.props }
            / >
        }
    }
}

export default withComp;