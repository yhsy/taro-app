import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

// Redux
import { connect } from '@tarojs/redux'

// Redux-方法
import { add, minus, asyncAdd } from '../../actions/counter'

// 样式
import './index.scss'

// 自定义组件
import NavBar from '@components/navbar'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))

class Index extends Component {
  //  页面标题
  config = {
    // navigationBarTitleText: '首页',
    // navigationBarBackgroundColor: '#ffffff',
    // navigationBarTextStyle: 'black',
    // navigationBarTitleText: '首页',
    // backgroundColor: '#f00',
    // backgroundTextStyle: 'light',
    // 隐藏导航栏(全局)
    navigationStyle: 'custom'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {/* 导航栏 */}
        <NavBar />

        <Button className='add_btn' onClick={this.props.add}>
          <Text className='add_btn_text'>+</Text>
        </Button>
        <Button className='dec_btn' onClick={this.props.dec}>
          <Text className='add_btn_text'>-</Text>
        </Button>
        <Button className='asc_btn' onClick={this.props.asyncAdd}>
          <Text className='add_btn_text'>async</Text>
        </Button>
        <View className='num'>
          <Text className='num_text'>{this.props.counter.num}</Text>
        </View>
        <View>
          <Text className="hello">Hello, World</Text>
        </View>
      </View>
    )
  }
}

export default Index
