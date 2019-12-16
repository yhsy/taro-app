import Taro, {Component} from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'

import {create} from 'dva-core';
import {connect} from '@tarojs/redux'
import action from '../../utils/action'

// 自定义组件
import NavBar from '@components/navbar'

import './home.scss'

@connect(({count, loading}) => ({
  ...count,
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

  render() {
    const { cNum, isLoading} = this.props;
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
        </View>
      )
  }
}

