import { post, get } from "@/utils/request";
import useUserStore from "@/store/modules/user";

/**
 * 账号密码登陆
 * @param {String} data.username
 * @param {String} data.password
 */
export function login(data) {
  return post('/login', data)
}

/**
 * 获取小程序openId
 * @param {*} code
 */
export function getMpOpenId(code) {
  let { appId, secret } = useUserStore()
  return get('/wx/user/login', {
    code,
    appid: appId,
    secret,
    grant_type: "authorization_code"
  })
}

// 验证token
export function verify() {
  return post("/verify", {});
}
