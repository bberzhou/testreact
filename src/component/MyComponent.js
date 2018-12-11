import React, {Component} from 'react';

class MyComponent extends Component{
    render(){
        return <h1>my first {this.props.name}</h1>
    }

}
export default MyComponent;