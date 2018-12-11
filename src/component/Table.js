import React, {Component} from 'react'

class Table extends Component {
  //  添加一个构造函数来初始化状态this.date
  constructor(props) {
    //  调用super来传递props，类组件应始终使用props调用基础构造函数
    super(props);
    this.state = {date: new Date()}
  }

  //  在组件类上声明特殊的方法，当组件挂载或卸载时，来运行一些代码,这些方法被称为钩子
  componentDidMount() {
  };

  componentWillMount() {
  }

  render() {
    return (
        <div className="tab1">
          <table border="1 ">
            <tr>
              <td>篮球</td>
              <td>排球</td>
            </tr>
            <tr>
              <td>自行车</td>
              <td>火车</td>
            </tr>
          </table>
          <h3>It's {this.state.date.toLocaleTimeString()}</h3>
        </div>
    )
  }
}

export default Table;