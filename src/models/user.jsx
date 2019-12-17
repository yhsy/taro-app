import Taro from '@tarojs/taro'

// Action方法
import action from "@utils/action";

// 请求接口
import { login } from '@servers/api'

export default {
    namespace: 'user',
    state: {
        userInfo: {}
    },
    effects: {
        // 登录
        * login({payload}, { put, call, select}){
            // console.log(`payload:${JSON.stringify(payload)}`)
            const response =  yield call(login, payload);
            // console.log(`res:${JSON.stringify(response.data)}`)
            // if(!response.success){
            //     Taro.showToast(response.msg)
            //     return
            // }
            // 数据同步
            yield put(action("loginOk", {userInfo: response.data}))
        },
    },
    reducers: {
        loginOk(state, {payload}) {
            // console.log(`payload:${JSON.stringify(payload)}`)
            return {...state, ...payload};
        },
    },
  };
  
