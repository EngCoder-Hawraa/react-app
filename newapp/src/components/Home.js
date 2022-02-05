import React, { Component, createRef, Fragment } from 'react';
/* - Mounting [constructor - getDerviedStateFromProps - render - componentDidMount]
- Updating [getDerviedStateFormProps - shouldComponentUpdate - render - getSnapShotBeforeUpdate - componentDidUpdate]
- UnMounting [componentWilUnmount]
*/
class Home extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {
            name: 'Home',
        }
        this.inputRef = createRef();
        this.callbackRef = null;
        this.callbackRefFun = (ele) => {
            this.callbackRef = ele;
        }
    }
    componentDidMount() {
        this.inputRef.current.focus();
    }

    updateData = () => {
        this.setState({
            name: "Home Comp",
        })
    }

    //gdsfp مختصر للكود التالي
    static getDerivedStateFromProps(props, state) {
            console.log("getDerivedStateFromProps");
            return null;
        }
        //cdm مختصر للكود التالي
        // componentDidMount() {
        //     console.log("componentDidMount");
        // }

    // scu اختصار للكود التالي
    shouldComponentUpdate(nextProps, nextState) {
            console.log("shouldComponentUpdate");
            return true;
        }
        //gsbu اختصار للكود التالي
    getSnapshotBeforeUpdate(prevProps, prevState) {
            console.log("getSnapshotBeforeUpdate");
        }
        // cdu اختصار للكود التالي
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    componentDidMount() {
            if (this.callbackRef) {
                this.callbackRef.focus();
            };
        }
        //cwum اختصار للكود التالي
    componentWillUnmount() {

    }
    render() {
        console.log("render");
        return ( <
            div >
            <
            Fragment >
            <
            li > Home < /li> <
            li > About < /li> < /
            Fragment > <
            button onClick = { this.updateData } > Update < /button> <
            input type = "text"
            ref = { this.inputRef }
            / > <
            input type = "text"
            ref = { this.callbackRefFun }
            / > < /
            div >
        );
    }
}

export default Home;