import { post, get } from "@/utils/request";

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

/**
 * 微信小程序登录
 * @param {*} iv
 * @param {*} encryptedData
 */
export function mpLogin(iv, encryptedData) {
  let { appId, sessionKey } = useUserStore()
  return get('/wx/user/phone', {
    appid: appId,
    sessionKey, iv, encryptedData
  })
}

// 验证token
export function verify() {
  return post("/verify", {});
}

// 用户信息
export function getUserInfo() {
  return get("/polymerize/query/userInfo", {});
}

// vip状态
export function vipStatus() {
  return post("/members/status", {});
}

