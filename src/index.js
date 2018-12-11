import React from 'react';
import ReactDOM from 'react-dom';
//  all in js，CSS也可以像js一样直接引入，
import './css/index.css';
//  引入app.js会直接补充后缀
import App from './App';
import {observable,action} from 'mobx';
import {Provider} from 'mobx-react'


//  progressive web application,引入serviceWorker就是为了写手机app

//  支持https的设备如果断网了的话，第二次再访问的时候也能够看到之前的内容,会缓存在浏览器里面


//  JSX 语法一定需要引入React
//  在JSX中如果需要使用自己的组件时，标签要以大写字母开头

//  一个全局的store保存数据
const store = observable({
  count:100,
  addCount:action((num)=>{
    store.count+=num;
  })
});
function tick(){
  ReactDOM.render(
      <Provider store={store}>
      <App />
      </Provider>,
      document.getElementById('root')
  );
}

setInterval(tick,1000);