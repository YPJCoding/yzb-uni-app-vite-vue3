import { getMpOpenId } from "@/api";
import useUserStore from "@/store/modules/user";

/**
 * 微信小程序openId
 */
export function mpOpenId() {
  uni.login({
    success: ({ code }) => {
      if (uni.getExtConfig) {
        uni.getExtConfig({
          success: async () => {
            let { openId } = storeToRefs(useUserStore())
            let [err, res] = await getMpOpenId(code)
            if (err) return;
            openId.value = res.openid;
          },
        });
      }
    },
  });
}
