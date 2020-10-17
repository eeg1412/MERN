import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

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

    render () {

        return (
            <div>
                <h1>请登录</h1>
                <div>
                    <p>账号：<input type="text" /></p>
                    <p>密码：<input type="password" /></p>
                </div>
                <div><button onClick={this.goDatiPage}>登录</button><Link to="/register">注册</Link></div>
            </div>
        )


    }
    goDatiPage = () => {
        //console.log(this.props)
        // this.props.history.push("/dati")
    }
}

//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default App