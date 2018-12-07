import React from 'react';
import ReactDOM from 'react-dom';
//  all in js，CSS也可以像js一样直接引入，
import './index.css';
//  引入app.js会直接补充后缀
import App from './App';


//  progressive web application,引入serviceWorker就是为了写手机app

//  支持https的设备如果断网了的话，第二次再访问的时候也能够看到之前的内容,会缓存在浏览器里面
import * as serviceWorker from './serviceWorker';


//  JSX 语法一定需要引入React
//  在JSX中如果需要使用自己的组件时，标签要以大写字母开头
ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
