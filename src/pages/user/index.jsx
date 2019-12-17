import Taro , { PureComponent } from '@tarojs/taro';
import { View, Text , Button} from '@tarojs/components';

class User extends PureComponent {

  config = {
    navigationBarTitleText: '我的页',
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
        <Text>this is User</Text>
      </View>
    );
  }
}
export default User;