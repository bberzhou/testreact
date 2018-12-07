import React, {Component} from 'react';
//  使用Fragment可以将最外层的隐藏掉
import logo from './logo.svg';
import MyComponent from './MyComponent';
import Table from './Table';
import './App.css';

// import {Component} from 'react';
//  等价于
// import React from 'react';
// const Component = React.Component

//  React DOM 也只会更新渲染文本节点中发生变化的内容。


//  类app继承了component就成为了一个组件
class App extends Component {

    // render也是JSX的语法，在写JSX的时候一般的都会带上一个小括号，防止分号自动插入
    render() {
        // render函数返回的就是这个组件展示的内容
        return (

            <div>
            <div className="App">
                <header className="App-header">
                    {/*
                        在JSX里面可以以引号来定义以字符串为值的属性，也可以使用使用大块号来定义以JS表达式为值的属性
                    */}
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <p>hello world</p>
                </header>
                <div>
                    <MyComponent name="DDD"/>
                    <Table/>
                </div>
                </div>
            </div>

        );
    }

}

export default App;
