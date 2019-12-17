import Taro from '@tarojs/taro'
import getBaseUrl from './baseUrl'
import interceptors from './interceptors'

// 请求接口鉴权(暂时不用)
// interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem))

// 请求封装
class httpRequest {
  
  baseOptions(params, method = "GET") {
    let { url, data } = params;
    // 根据接口前缀获取接口网址
    const BASE_URL = getBaseUrl(url);
    // let BASE_URL = 'http://10.27.16.226:7001'

    let contentType = "application/json";
    contentType = params.contentType || contentType;
    
    const option = {
      url: BASE_URL + url,
      data: data,
      method: method,
      header: {
        'content-type': contentType,
        // 'Authorization': Taro.getStorageSync('Authorization') || ''
      }
    };
    // console.log(`option: ${JSON.stringify(option)}`)
    return Taro.request(option);
  }

  get(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option);
  }

  post(url, data, contentType) {
    let params = { url, data, contentType };
    return this.baseOptions(params, "POST");
  }

  put(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "PUT");
  }

  delete(url, data = "") {
    let option = { url, data };
    return this.baseOptions(option, "DELETE");
  }

}

export default new httpRequest()
