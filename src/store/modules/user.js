export default defineStore('user', () => {
  let userInfo = ref({})
  return {
    userInfo
  }
}, {
  persist: {
    // 开启持久化
    enabled: true,
  },
})