import { getMpOpenId, login } from "@/api";
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
  let [err, res] = await login({
    username: data.username.replace('+86', "").replace(/[^0-9]/ig, ""),
    password: data.password
  })
  if (err) return
  setToken(res)
  // 登录完成后，后退
  let { route } = useRoute()
  if (route.indexOf('quick') !== -1 || process.env.UNI_PLATFORM === "h5") {
    router.back()
  } else {
    router.back(2)
  }
}

/**
 * 存储token
 * @param {*} val token
 */
export function setToken(val) {
  let { token } = storeToRefs(useUserStore())
  token.value = val
}
