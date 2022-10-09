export default defineStore('user', () => {
  let userInfo = ref({})
  let openId = ref('')
  let appId = ref('wx61e51be46b3032e7')
  let secret = ref("4fd0d128ad3fa13a4876018587d4a945")
  return {
    userInfo,
    openId,
    appId,
    secret
  }
}, {
  persist: {
    // 开启持久化
    enabled: true,
  },
})
