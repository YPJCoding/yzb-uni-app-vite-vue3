import { getMpOpenId } from "@/api";

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
 * 存储token
 * @param {*} val token
 */
export function setToken(val) {
  let { token } = storeToRefs(useUserStore())
  token.value = val
}
