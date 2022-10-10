
export function request(baseUrl) {
  uni.$u.http.setConfig({
    baseUrl,
    // 是否显示请求中的loading
    showLoading: true,
    loadingText: '努力加载中~',
    loadingTime: 3000,
    // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    loadingMask: true,
    header: {
      'Content-Type': 'application/json'
    }
  });
  uni.$u.http.interceptor.request = (config) => {
    let { token } = useUserStore()
    config.header.Authorization = token
    return config;
  }
  uni.$u.http.interceptor.response = (res) => {
    let code = res.status || res.resCode
    let data = res.data || res.resData
    if (code == 200) {
      console.log('🚀', data);
      return [null, data];
    } else {
      if ([400, 401, 405].includes(code)) {

      }
      console.log('❌', res);
      return [res]
    }
  }
}

export function post(url, data, baseUrl = import.meta.env.VITE_APP_BASE_URL_1) {
  return new Promise(resolve => {
    request(baseUrl)
    resolve(uni.$u.post(url, data))
  })
}

export function get(url, data, baseUrl = import.meta.env.VITE_APP_BASE_URL_1) {
  return new Promise(resolve => {
    request(baseUrl)
    resolve(uni.$u.get(url, data))
  })
}
