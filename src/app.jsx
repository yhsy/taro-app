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
// import configStore from './store'

// 全局样式
import './app.scss'



// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

// Redux入口(通过Provider,全局使用Redux)
// const store = configStore()

/* Dva状态管理-start */
// Dva配置
import dva from './store/dva'
import models from './models'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch(action("sys/error", e));
  },
});
const store = dvaApp.getStore();
/* Dva状态管理-end */

class App extends Component {
  // 路由配置
  config = {
    // 路由
    pages: [
      // 首页
      // 'pages/index/index',
      'pages/home/index',
      // 分类
      'pages/cate/index',
      // 购物车
      'pages/cart/index',
      // 我的
      'pages/user/index'
    ],
    // 用于设置小程序的状态栏、导航条、标题、窗口背景色
    window: {
      // backgroundTextStyle: 'light',
      // navigationBarBackgroundColor: '#fff',
      // navigationBarTitleText: 'Taro-app',
      // navigationBarTextStyle: 'black',
      // 隐藏导航栏
      navigationStyle: 'custom'
    },
    // 全局tabBar配置
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [{
        // pagePath: "pages/index/index",
        pagePath: "pages/home/index",
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

  componentDidMount () {
    dvaApp.dispatch({type: 'sys/test'})
  }

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

// 将状态栏高度挂载全局
Taro.getSystemInfo({})
  .then(res  => {
      // 获取系统信息 
      // console.log(`res:${JSON.stringify(res)}`)
      // console.log(`height:${res.statusBarHeight}`)
      Taro.$navBarMarginTop =  res.statusBarHeight || 0;
  })

// 渲染
Taro.render(<App />, document.getElementById('app'))
