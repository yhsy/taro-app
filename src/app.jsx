// 引入基础的依赖包
// 异步方法
import '@tarojs/async-await'
// Taro基础库
import Taro, { Component } from '@tarojs/taro'
// redux库
import { Provider } from '@tarojs/redux'

// 首页组件
import Index from './pages/index'

// Redux的配置文件
import configStore from './store'
// 全局样式
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
// Redux入口(通过Provider,全局使用Redux)
const store = configStore()

class App extends Component {
  // 路由配置
  config = {
    // 路由
    pages: [
      // 首页
      'pages/index/index',
      // 分类
      'pages/cate/index',
      // 购物车
      'pages/cart/index',
      // 我的
      'pages/user/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    // 全局tabBar配置
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        pagePath: "pages/index/index",
        iconPath: "./assets/tab-bar/home.png",
        selectedIconPath: "./assets/tab-bar/home-active.png",
        text: "首页"
      }, {
        pagePath: "pages/cate/index",
        iconPath: "./assets/tab-bar/cate.png",
        selectedIconPath: "./assets/tab-bar/cate-active.png",
        text: "分类"
      }
      , {
        pagePath: "pages/cart/index",
        iconPath: "./assets/tab-bar/cart.png",
        selectedIconPath: "./assets/tab-bar/cart-active.png",
        text: "购物车"
      },
      {
        pagePath: "pages/user/index",
        iconPath: "./assets/tab-bar/user.png",
        selectedIconPath: "./assets/tab-bar/user-active.png",
        text: "我的"
      }
    ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
// 渲染
Taro.render(<App />, document.getElementById('app'))
