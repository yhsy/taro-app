// 默认依赖
import Taro, {Component} from '@tarojs/taro'
import { View, Button, Text, Input, Image } from '@tarojs/components'

// 状态管理
import {create} from 'dva-core';
import {connect} from '@tarojs/redux'
// Action方法
import action from '@utils/action'

// 自定义组件
import NavBar from '@components/navbar'

// 样式
import './home.scss'

@connect(({count, user, loading}) => ({
  ...count,
  ...user,
  // 异步loading状态
  isLoading: loading.effects["count/asyncAddNum"],
}))

export default class Home extends Component {
  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark",
  };

  constructor() {
    super(...arguments);
    this.state = {
      username: '',
      password: '',
    }
  }

  // 加法运算
  addNum = () => {
    this.props.dispatch(action("count/addNum",this.props.cNum));
  }

  // 减法运算
  minusNum = () => {
    this.props.dispatch(action("count/minusNum",this.props.cNum));
  } 

  // 异步加法
  asyncAddNum = () => {
    this.props.dispatch(action("count/asyncAddNum"));
  }

  // 登录
  login = () => {
    const { username,password} = this.state;
    const payload = {
      username,
      password,
    }
    this.props.dispatch(action("user/login",payload));
  }

  navTo = () => {
    // 保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。
    Taro.navigateTo({
      url: 'pages/user/user-login'
    })
    // 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
    // Taro.redirectTo({
    //   url: 'pages/user/user-login'
    // })
    // 关闭所有页面，打开到应用内的某个页面
    // Taro.reLaunch({
    //   url: 'pages/user/user-login'
    // })
    // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    // Taro.switchTab({
    //   url: 'pages/user/user-login'
    // })
  }

  render() {
    // redux里的数据
    const { cNum, isLoading, userInfo} = this.props;
    // 组件的state
    const { username, password } = this.state;

    return (
        <View className='index'>
          {/* 导航栏 */}
          <NavBar />
  
          <Button className='add_btn' onClick={this.addNum}>
            <Text className='add_btn_text'>+</Text>
          </Button>
          <Button className='dec_btn' onClick={this.minusNum}>
            <Text className='add_btn_text'>-</Text>
          </Button>
          
          <Button className='asc_btn' onClick={this.asyncAddNum}>
              <Text className='add_btn_text'>async+5</Text>
          </Button> 
         
          <View className='num'>
            {/* <Text className='num_text'>{cNum}</Text> */}
            <Text className='num_text'>{isLoading ? '异步加载中' : cNum}</Text>
          </View>
          {/* 
            <View className='m_login'>
              <View className="ipt_item">
                <Text className='ipt_label'>账号:</Text>
                <Input 
                  className='ipt_text' 
                  type='text' 
                  placeholder='请输入账号'
                  value={username}
                  onInput={(e)=>{
                    // console.log(e.target.value)
                    const val = e.target.value;
                    this.setState({
                      username: val
                    })
                  }}
                />
              </View>
              <View className="ipt_item">
                <Text className='ipt_label'>密码:</Text>
                <Input 
                  className='ipt_text' 
                  type="password"
                  password={true}
                  placeholder='请输入密码'
                  value={ password }
                  onInput={(e)=>{
                    // console.log(e.target.value)
                    const val = e.target.value;
                    this.setState({
                      password: val
                    })
                  }}
                />
              </View>
              <View className="ipt_item">
                <Button className='btn_login' onClick={this.login}>
                  <Text className='add_btn_text'>登录</Text>
                </Button>
              </View>

                {
                  userInfo.msg && (
                    <View className="user_info">
                      <Text className="text-red">{`个人信息:${userInfo.msg}`}</Text>
                      <Text>{`用户ID:${userInfo.data.id}`}</Text>
                      <Text>{`用户昵称:${userInfo.data.nickname}`}</Text>
                      <Image src={userInfo.data.avatar} />
                    </View>
                  )
                }

            </View> 
          */}

          {
            userInfo.msg && (
              <View className="user_info">
                <Text className="text-red">{`个人信息:${userInfo.msg}`}</Text>
                <Text>{`用户ID:${userInfo.data.id}`}</Text>
                <Text>{`用户昵称:${userInfo.data.nickname}`}</Text>
                <Image src={userInfo.data.avatar} />
              </View>
            )
          }

          <View className='m_navigation'>
            <Button className='btn_login' onClick={this.navTo}>
              <Text className='add_btn_text'>点击跳到登录页</Text>
            </Button>
          </View>
        </View>
      )
  }
}

