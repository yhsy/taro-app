import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class Cate extends PureComponent {


  config = {
      navigationBarTitleText: '分类页',
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTextStyle: 'black',
      navigationStyle: 'default',
  }


  state={}

  componentWillMount () {}
  componentDidMount () {} 
  componentWillReceiveProps (nextProps,nextContext) {} 
  componentWillUnmount () {} 
  componentDidShow () {} 
  componentDidHide () {} 
  componentDidCatchError () {} 
  componentDidNotFound () {} 
  render() {
    return (
      <View>
        <Text>this isCate</Text>
      </View>
    );
  }
}
export default Cate;