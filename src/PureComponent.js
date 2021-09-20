import React from 'react';

export default class PureComponent extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            counter:0
        }
    }
    componentDidMount=()=>{
        var count = this.state.counter;
        this.setState({
            counter: count + 1
            });
    }
    
    componentDidUpdate=()=>{
        var count = this.state.counter;
        setTimeout(() => {
            console.log("OH I AM THE COUNTER FROM PURE");
            this.setState({
            counter: count
            });
        }, 1000);
    }
    render(){
        return (<div>Hello I AM THE Pure Component {this.state.counter}</div>)
    }
}