import { Provider as TCRNProvider } from '@tarojs/components-rn';
import TaroRouter from '@tarojs/taro-router-rn';
import assetsTabBarUserActivePng from '././assets/tab-bar/user-active.png';
import assetsTabBarUserPng from '././assets/tab-bar/user.png';
import assetsTabBarCartActivePng from '././assets/tab-bar/cart-active.png';
import assetsTabBarCartPng from '././assets/tab-bar/cart.png';
import assetsTabBarCateActivePng from '././assets/tab-bar/cate-active.png';
import assetsTabBarCatePng from '././assets/tab-bar/cate.png';
import assetsTabBarHomeActivePng from '././assets/tab-bar/home-active.png';
import assetsTabBarHomePng from '././assets/tab-bar/home.png';
import pagesUserIndex from './pages/user/index';
import pagesCartIndex from './pages/cart/index';
import pagesCateIndex from './pages/cate/index';
import pagesIndexIndex from './pages/index/index';
import Taro from '@tarojs/taro-rn';
import React from 'react';
// 引入基础的依赖包
// 异步方法
import '@tarojs/async-await';
// Taro基础库
import { Component } from "@tarojs/taro-rn";
// redux库
import { Provider } from "@tarojs/taro-redux-rn";

// 首页组件


// Redux的配置文件
import configStore from "./store/index";
// 全局样式
import appStyleSheet from "./app_styles";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
// Redux入口(通过Provider,全局使用Redux)
var _styleSheet = appStyleSheet;
const store = configStore();

let App = class App extends Component {
  constructor(props, context) {
    super(props, context);
    Taro._$app = this;
  }
  // 路由配置


  componentDidMount() {
    this.componentDidShow();
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider store={store}>
                  
                <TCRNProvider>
                  <RootStack />
                </TCRNProvider>
                </Provider>;
  }

  componentWillUnmount() {
    this.componentDidHide && this.componentDidHide();
  }

};

// 将状态栏高度挂载全局

App.config = {
  // 用于设置小程序的状态栏、导航条、标题、窗口背景色
  window: {
    // backgroundTextStyle: 'light',
    // navigationBarBackgroundColor: '#fff',
    // navigationBarTitleText: 'Taro-app',
    // navigationBarTextStyle: 'black',
    // 隐藏导航栏
    navigationStyle: 'custom'
  }
  // 路由
  ,
  // 全局tabBar配置
  tabBar: {
    color: "#666",
    selectedColor: "#b4282d",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [{
      pagePath: "pages/index/index",
      iconPath: assetsTabBarHomePng,
      selectedIconPath: assetsTabBarHomeActivePng,

      text: "首页"
    }, {
      pagePath: "pages/cate/index",
      iconPath: assetsTabBarCatePng,
      selectedIconPath: assetsTabBarCateActivePng,

      text: "分类"
    }, {
      pagePath: "pages/cart/index",
      iconPath: assetsTabBarCartPng,
      selectedIconPath: assetsTabBarCartActivePng,

      text: "购物车"
    }, {
      pagePath: "pages/user/index",
      iconPath: assetsTabBarUserPng,
      selectedIconPath: assetsTabBarUserActivePng,

      text: "我的"
    }]
  }
};
Taro.getSystemInfo({}).then(res => {
  // 获取系统信息 
  // console.log(`res:${JSON.stringify(res)}`)
  // console.log(`height:${res.statusBarHeight}`)
  Taro.$navBarMarginTop = res.statusBarHeight || 0;
});

// 渲染
const RootStack = TaroRouter.initRouter([['pages/index/index', pagesIndexIndex], ['pages/cate/index', pagesCateIndex], ['pages/cart/index', pagesCartIndex], ['pages/user/index', pagesUserIndex]], Taro, App.config);
Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
export default App;