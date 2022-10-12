import { getMpOpenId, login, vipStatus, getUserInfo } from "@/api";
import { useRoute, useRouter } from "./router";

let router = useRouter()
/**
 * 微信小程序openId
 */
export function mpOpenId() {
  uni.login({
    success: ({ code }) => {
      if (uni.getExtConfig) {
        uni.getExtConfig({
          success: async () => {
            let { openId, sessionKey } = storeToRefs(useUserStore())
            let [err, res] = await getMpOpenId(code)
            if (err) return;
            openId.value = res.openid;
            sessionKey.value = res.sessionKey;
          },
        });
      }
    },
  });
}

/**
 * 登陆存储token
 * @param {*} data.username
 * @param {*} data.password
 */
export async function loginRequest(data) {
  let { token, userInfo } = storeToRefs(useUserStore())
  let [err1, res1] = await login({
    username: data.username.replace('+86', "").replace(/[^0-9]/ig, ""),
    password: data.password
  })
  if (err1) return
  token.value = res1
  // 获取用户信息
  let [err2, res2] = await getUserInfo()
  if (err2) return
  // 获取用户会员状态
  let [err3, res3] = await vipStatus()
  if (err3) return
  userInfo.value = {
    ...res2, ...res3
  }
  // 登录完成后，后退
  let { route } = useRoute()
  if (route.indexOf('quick') !== -1 || process.env.UNI_PLATFORM === "h5") {
    router.back()
  } else {
    router.back(2)
  }
}
