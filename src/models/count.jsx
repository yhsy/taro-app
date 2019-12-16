// Action方法封装
import action from "../utils/action";
// 延迟执行方法
import delay from "../utils/delay";

export default {
    namespace: 'count',
    state: {
        cNum: 0
    },
    effects: {
        // 加法
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
        // 减法
        * minusNum({payload}, {put, call, select}){
            console.log('minusNum')
            // 获取全局state
            const cNum = yield select(state => {
                return state.count.cNum
            });
            console.log(`cNum:${cNum}`)

            let countNum = payload - 1;
            yield put(action("saveNum", {cNum: countNum}))
        },
        // 异步加法
        * asyncAddNum({payload}, { put, call, select}){
            console.log('asyncAddNum')

            // 方法1:通过接收参数
            // let countNum = payload + 5;
            // console.log(`countNum:${countNum}`)

            // 方法2:自己获取state的值

            // 获取全局state
            const cNum = yield select(state => {
                return state.count.cNum
            });
            console.log(`cNum:${cNum}`)

            const countNum = cNum +5;

            // 增加延迟测试效果
            yield call(delay, 2000);
            // 数据提交同步
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
  