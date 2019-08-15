import { getWeather } from '../pages/headLineServ';

// 导出的状态机
const Module = {
  state: {
    weatherInfo: [],
  },
  effects: {
    // 查询列表
    * init({ payload = {}, callback }, { put, call, select }) {
      // yield put({ type: 'getWeather' });
    },
    // 获取异常车辆排行信息
    * getWeather({ payload = {} }, { put, call, select }) {
      const params = {
        city: '广州'
      };
      console.log(params)
      const res = yield call(getWeather, params);

      yield put({ type: 'updateStore', payload: { weatherInfo: res.data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (location.pathname === '/') {
          dispatch({
            type: 'init',
          });
        }
      });
    },
  },
  reducers: {
    updateStore(preState, action) {
      return { ...preState, ...action.payload };
    },
  },
};

export default Module;
