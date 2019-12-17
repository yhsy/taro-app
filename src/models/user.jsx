import Taro from '@tarojs/taro'

// Action方法
import action from "../utils/action";

// 请求接口
import { login, getUserInfo } from '@servers/api'

import md5 from 'blueimp-md5'

export default {
    namespace: 'user',
    state: {
        userInfo: {}
    },
    effects: {
        // 登录
        * login({payload}, { put, call, select}){
            const { username, password } = payload;
            const passwordMd5 = md5(password);
            // console.log(`payload:${JSON.stringify(payload)}`)
            // 登录接口
            const response =  yield call(login, {username,password: passwordMd5});

            const responseData = response.data;
            // console.log(`res:${JSON.stringify(responseData)}`)
            // 判断是否登录成功
            if(!responseData.success){
                Taro.showToast({
                    title: responseData.msg,
                    icon: 'none',
                    duration: 2000
                  })
                return
            }
            // console.log(`response:${JSON.stringify(responseData)}`)
            
            // 获取用户id和token
            const { id,token } = responseData.data;

            // 本地存储用户的token和id
            Taro.setStorage({ key: 'token', data: token }).then((res) => {
                console.log(`resToken: ${JSON.stringify(res)}`)
            }).catch((err) => {
                console.log(`err: ${JSON.stringify(err)}`)
            })

            // 获取个人信息
            const res =  yield call(getUserInfo, {id});
            const resData = res.data;
            // console.log(`resData:${JSON.stringify(res.data)}`)
            // 获取个人信息失败
            if(!resData.success){
                Taro.showToast({
                    title: resData.msg,
                    icon: 'none',
                    duration: 2000
                })
            }
            // 个人信息-数据同步
            yield put(action("loginOk", {userInfo: resData}))
        },
    },
    reducers: {
        loginOk(state, {payload}) {
            // console.log(`payload:${JSON.stringify(payload)}`)
            return {...state, ...payload};
        },
    },
  };
  