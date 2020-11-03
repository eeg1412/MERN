import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { authApi } from "../api";

//将state映射到props函数
function mapStateToProps (state) {
  return { ...state }
}


//将修改state数据的方法，映射到props,默认会传入store里的dispach方法
function mapDispatchToProps (dispatch) {
  return {
    onAddClick: () => { dispatch({ type: 'add' }) },


  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: '',
      password: ''
    };
    this.setAccount = this.setAccount.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }
  setAccount (event) {
    this.setState({ account: event.target.value });
  }
  setPassword (event) {
    this.setState({ password: event.target.value });
  }
  render () {
    const { account, password } = this.state;
    return (
      <div>
        <h1>请登录</h1>
        <div>
          <p>账号：<input type="text" value={account} onChange={this.setAccount} /></p>
          <p>密码：<input type="password" value={password} onChange={this.setPassword} /></p>
        </div>
        <div><button onClick={this.goLogin}>登录</button><Link to="/register">注册</Link></div>
      </div>
    )


  }
  goLogin = () => {
    const params = {
      account: this.state.account,
      password: this.state.password
    }
    authApi.login(params).then(res => {
      alert(res.data.msg);
      if (res.data.code === 1) {
        this.props.history.push('/');
      }
    });
  }
}

//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default App