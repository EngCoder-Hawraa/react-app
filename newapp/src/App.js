import React, { Component, PureComponent } from "react";
import Home from './components/Home';
import CompA from './components/CompA';
import CompB from './components/CompB';
import Comp from './components/Comp';
import RenderProps from './components/RenderProps';

class App extends Component {
    // class App extends PureComponent {

    state = {
            name: 'App Comp',
        }
        //shallow comparession
    updateName = () => {
        this.setState({
            name: 'App Comp',
        })
    }
    render() {
        // console.log(this.state.name);
        return ( <
            div className = "App" >
            App comp <
            button onClick = { this.updateName } > Update < /button> <
            ul >
            <
            Comp render = {
                (arg1, arg2) => < CompA name = { arg1 }
                updateNameState = { arg2 }
                / >
            }
            /> <
            Comp render = {
                (arg1, arg2) => < CompB name = { arg1 }
                updateNameState = { arg2 }
                / >
            }
            / > <
            CompA test = "test CompA" / >
            <
            CompB / >
            <
            RenderProps hawraa = {
                (value, p2) => {
                    return <div > { value } { p2 } <
                        /div>
                }
            }
            / > < /
            ul >
            <
            Home / >
            <
            /
            div >
        );
    }
}

export default App;