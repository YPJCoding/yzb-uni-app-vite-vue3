<template>
  <div class="center flex-col p-5">
    <img src="../../static/logo.png" alt="" class="w-10 h-10 mx-auto block mb-20 mt-10">
    <u-button class="w-full" :disabled="!checked" type="success" :ripple="true" open-type="getPhoneNumber"
      @getphonenumber="getPhoneNumber">
      微信用户一键登录
    </u-button>
    <u-button class="w-full mt-3" :disabled="!checked" :ripple="true">账号密码登录</u-button>
    <div class="text-[24rpx] center mt-10">
      <radio class="scale-[0.55]" :checked="checked" @click="checked=!checked"></radio>
      <span class="text-stone-500">登录代表您已同意</span>
      <span class="text-main">《用户协议》</span>、<span class="text-main">《隐私政策》</span>
    </div>
  </div>
</template>

<script setup>
import { login, mpLogin } from '@/api'
import { setToken } from "@/utils/login";

let checked = $ref(import.meta.env.VITE_APP_ENV === 'development')

function getPhoneNumber({ detail }) {
  uni.checkSession({
    success: () => {
      uni.getExtConfig({
        success: async () => {
          let [err1, { loginCode, wxMaPhoneNumberInfo }] = await mpLogin(detail.iv, detail.encryptedData)
          if (err1) return;
          if (!wxMaPhoneNumberInfo) {
            uni.showModal({
              title: "提示",
              content: "未获取到手机号，请重试",
              success: () => wx.exitMiniProgram()
            })
            return
          }
          let [err2, res2] = await login({
            username: wxMaPhoneNumberInfo?.phoneNumber,
            password: loginCode
          })
          if (err2) return
          setToken(res2)
        }
      })
    }
  })
}
</script>

<style lang="scss" scoped>

</style>
