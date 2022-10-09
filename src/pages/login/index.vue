<template>
  <div center flex-col p-5>
    <img src="../../static/logo.png" alt="" w-10 h-10 mx-auto block mb-20 mt-10>
    <u-button w-full :disabled="!checked" type="success" :ripple="true" open-type="getPhoneNumber"
      @getPhoneNumber="getPhoneNumber">
      微信用户一键登录
    </u-button>
    <u-button w-full mt-3 :disabled="!checked" :ripple="true">账号密码登录</u-button>
    <div text="22rpx">
      <radio transform="scale" :checked="checked"></radio>
      <u-checkbox icon-size="20" size="26" label-size="22" shape="circle" v-model="checked">登录代表您已同意</u-checkbox>
      <span>《用户协议》</span>、<span>《隐私政策》</span>
    </div>
  </div>
</template>

<script setup>
import { login } from '@/api'

let form = $ref({
  username: "18237171563",
  password: "123123"
})

let checked = $ref(false)

onLoad(async () => {
  // let [err, res] = await login(form)
  // if (err) return

})

function getPhoneNumber(e) {
  console.log('getPhoneNumber', e);
}
</script>

<style lang="scss" scoped>
e {
  transform: scale();
}
</style>
