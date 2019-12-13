// src/components/Navbar/index

import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
// import './index.scss'
class Navbar extends Taro.Component {

  render() {
    const style = {
      //   paddingTop: Taro.$navBarMarginTop + 'px'
      // 状态栏高度
      paddingTop: Taro.$navBarMarginTop
    }
    // 将状态栏的区域空余出来
    return (
      <View className='navbarWrap' style={style}>
        <View className='navbar'>自定义导航栏</View>
      </View>
    );
  }
}
export default Navbar

// 这里导航栏内容可以自行配置