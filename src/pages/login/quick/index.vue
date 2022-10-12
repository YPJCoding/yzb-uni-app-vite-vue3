<template>
  <div class="center flex-col p-5">
    <img src="../../static/logo.png" alt="" class="w-10 h-10 mx-auto block mb-20 mt-10">

    <u-button class="w-full" :disabled="!checked" type="success" :ripple="true" open-type="getPhoneNumber"
      @getphonenumber="getPhoneNumber">
      微信用户一键登录
    </u-button>
    <u-button class="w-full mt-3" :disabled="!checked" @click="toNormalLogin" :ripple="true">账号密码登录</u-button>

    <!-- 协议复选框 -->
    <RadioPolicy :checked="checked" @change="checked=$event" />
  </div>
</template>

<script setup>
import { useRouter } from "@/utils/router"
import RadioPolicy from "../components/RadioPolicy/index.vue"
import { mpLogin } from '@/api'
import { loginRequest } from "@/utils/login";

// 阅读同意协议
let checked = $ref(import.meta.env.VITE_APP_ENV === 'development')

const router = useRouter()

/**
 * 微信一键登录
 */
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
          await loginRequest({
            username: wxMaPhoneNumberInfo?.phoneNumber,
            password: loginCode
          })
        }
      })
    }
  })
}

/**
 * 账号密码登录
 */
function toNormalLogin() {
  router.push({
    name: 'NormalLogin'
  })
}

</script>

<style lang="scss" scoped>

</style>
