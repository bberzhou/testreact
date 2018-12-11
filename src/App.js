import React, {Component} from 'react';
import {inject,observer} from 'mobx-react';
import Mobxtest from './component/Mobxtest'
//  使用Fragment可以将最外层的隐藏掉
import './css/App.css';
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
          <Mobxtest/>
        </div>
    );
  }
}


export default inject('store')(observer(App));
