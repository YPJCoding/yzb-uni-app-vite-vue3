export const useUserStore = defineStore('user', () => {
  let token = ref('')
  let userInfo = ref()
  let openId = ref('')
  let appId = ref('wx61e51be46b3032e7')
  let secret = ref("4fd0d128ad3fa13a4876018587d4a945")
  let sessionKey = ref("")
  return {
    token,
    userInfo,
    openId,
    appId,
    secret,
    sessionKey
  }
}, {
  persist: {
    // 开启持久化
    enabled: true,
  },
})
