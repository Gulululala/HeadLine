import Axios from 'axios';
import qs from 'qs';
/**
 * 请求拦截器
 * @param pending     用于存储请求标识
 * @param cancelToken CancelToken构造函数创建取消令牌
 * @param removePending  清除令牌标识
 */

const pending = [];
const cancelToken = Axios.CancelToken;
const removePending = config => {
  for (let p in pending) {
    if (pending[p].u === config.url + '&' + config.method) {
      // 当前请求在数组中存在时执行函数体
      pending[p].f(); // 执行取消操作
      pending.splice(p, 1); // 把这条记录从数组中移除
    }
  }
};

// 添加请求拦截器
Axios.interceptors.request.use(
  config => {
    removePending(config);
    config.cancelToken = new cancelToken(c => {
      // 拼接标识字符串 和 传递清除回调
      pending.push({ u: config.url + '&' + config.method, f: c });
    });
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 添加响应拦截器
Axios.interceptors.response.use(
  response => {
    removePending(response.config);
    return response;
  },
  error => {
    return Promise.resolve(error.response);
  },
);

Axios.interceptors.response.use(
  response => {
    const { status, statusText } = response;
    if (status >= 200 && status < 300) {
      return response.data;
    }

    // show error message
    alert("请求错误");
    // reqInform({
    //   message: `请求错误 ${status}: ${response.url}`,
    //   description: errorText,
    // }, 'error');

    // environment should not be used
    if (status === 403) {
      // router.push('/exception/403');
      return false;
    }
    if (status <= 504 && status >= 500) {
      // router.push('/exception/500');
      return;
    }
    // 如下处理是临时处理
    if (status >= 404 && status < 422) {
      // router.push('/exception/404');
    }
    const error = new Error(statusText);
    error.response = response;
    return error;
  },
  error => {
    return Promise.resolve(error.response);
  },
);

const fetch = options => {
  const { url, method, headers, data } = options;
  const header = {
    'Content-Type': 'application/json;charset=UTF-8',
    ...headers,
  };
  switch (method.toLowerCase()) {
    case 'get':
      return Axios.get(
        `${url}${options.data ? `?${qs.stringify(options.data, { indices: false })}` : ''}`,
        {
          headers: header,
          responseType: options.responseType,
        },
      );
    case 'delete':
      return Axios.delete(`${url}${options.data ? `?${qs.stringify(options.data)}` : ''}`, {
        headers: header,
      });
    case 'head':
      return Axios.head(url, data, { headers: header });
    case 'post':
      let newData = data;
      if (String(header['Content-type']) === 'application/x-www-form-urlencoded') {
        newData = qs.stringify(data);
      }
      return Axios.post(url, newData, {
        headers: header,
        responseType: options.responseType,
      });
    case 'put':
      let putData = data;
      if (String(header['Content-type']) === 'application/x-www-form-urlencoded') {
        putData = qs.stringify(data);
      }
      return Axios.put(url, putData, { headers: header });
    case 'patch':
      return Axios.patch(url, data, { headers: header });
    default:
      return Axios(options);
  }
};

/**
 * 公用封装的axios tenantId
 * @param {string} [options] 参数对象
 */

export default function request(option) {
  const options = {
    ...option,
  };
  return new Promise((resolve, reject) => {
    fetch(options)
      .then(res => {
        /**
         * biz.101.104:loginToken无效或已过期
         */
        const rCode = ['biz.101.104'];
        if (rCode.indexOf(res.code) !== -1) {
          alert("lala")
        } else {
          resolve(res);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}
