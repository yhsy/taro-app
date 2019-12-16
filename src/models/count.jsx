import delay from "../utils/delay";

import action from "../utils/action";


export default {
    namespace: 'count',
    state: {
        cNum: 0
    },
    effects: {
        * addNum({payload}, { put, call, select}){
            console.log('addNum')
            console.log(`payload:${JSON.stringify(payload)}`)
            // console.log(`all:${JSON.stringify(all)}`)

            let countNum = payload + 1;

            console.log(`countNum:${countNum}`)

            // 获取全局state
            const cNum = yield select(state => {
                return state.count.cNum
            });
            console.log(`cNum:${cNum}`)

            // yield call(delay, 2000);//增加延迟测试效果
            // // 数据提交同步
            yield put(action("saveNum", {cNum: countNum}))
        },
        * minusNum({payload}, {put, call, select}){
            console.log('minusNum')
            // 获取全局state
            const cNum = yield select(state => {
                return state.count.cNum
            });
            console.log(`cNum:${cNum}`)

            let countNum = payload - 1;
            yield put(action("saveNum", {cNum: countNum}))
        }
    },
    reducers: {
        saveNum(state, {payload}) {
            // console.log(`payload:${JSON.stringify(payload)}`)
            return {...state, ...payload};
        },
    },
  };
  