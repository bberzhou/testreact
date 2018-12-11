import React,{Component} from 'react';
import {inject,observer} from 'mobx-react';

class Mobxtest extends Component{
  render(){
    const store = this.props.store
    return(
        <div className={'test'}>
          <h1>测试mobx:现在是{store.count}</h1>
          <button onClick={()=>{
            store.addCount(3);
          }}>点击增加3</button>
          <button onClick={()=>{
            store.count +=3;
          }}>不规则加3</button>
        </div>
    )
  }
}
export default inject('store')(observer(Mobxtest));