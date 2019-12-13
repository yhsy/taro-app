var _dec, _class;

import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Button, Text } from "@tarojs/components-rn";

// Redux
import { connect } from "@tarojs/taro-redux-rn";

// Redux-方法
import { add, minus, asyncAdd } from "../../actions/counter";

// 样式
import indexStyleSheet from "./index_styles";

// 自定义组件
import NavBar from "../../components/navbar/index";

var _styleSheet = indexStyleSheet;
let Index = (_dec = connect(({ counter }) => ({
  counter
}), dispatch => ({
  add() {
    dispatch(add());
  },
  dec() {
    dispatch(minus());
  },
  asyncAdd() {
    dispatch(asyncAdd());
  }
})), _dec(_class = class Index extends Component {

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  //  页面标题


  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <View style={_styleSheet["index"]}>
        {}
        <NavBar />

        <Button onClick={this.props.add} style={_styleSheet["add_btn"]}>
          <Text style={_styleSheet["add_btn_text"]}>+</Text>
        </Button>
        <Button onClick={this.props.dec} style={_styleSheet["dec_btn"]}>
          <Text style={_styleSheet["add_btn_text"]}>-</Text>
        </Button>
        <Button onClick={this.props.asyncAdd} style={_styleSheet["asc_btn"]}>
          <Text style={_styleSheet["add_btn_text"]}>async</Text>
        </Button>
        <View style={_styleSheet["num"]}>
    <Text style={_styleSheet["num_text"]}>{this.props.counter.name}{this.props.counter.num}</Text>
        </View>
        <View>
          <Text style={_styleSheet["hello"]}>Hello, World</Text>
        </View>
      </View>;
  }
}) || _class);
Index.config = {
  // navigationBarTitleText: '首页',
  // navigationBarBackgroundColor: '#ffffff',
  // navigationBarTextStyle: 'black',
  // navigationBarTitleText: '首页',
  // backgroundColor: '#f00',
  // backgroundTextStyle: 'light',
  // 隐藏导航栏(全局)
  navigationStyle: 'custom'
};


export default Index;