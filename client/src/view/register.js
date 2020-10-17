import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class register extends Component {
  render () {
    return (
      <div>
        <h1>注册</h1>
        <div>
          <p>账号：<input type="text" /></p>
          <p>密码：<input type="password" /></p>
        </div>
        <div><button>注册</button><Link to="/">返回</Link></div>
      </div>
    );
  }
}

export default register;