<template>
  <div class="center flex-col p-5">
    <img src="../../../static/logo.png" alt="" class="w-10 h-10 mx-auto block mb-20 mt-10">
    <u-form class="w-11/12 text-[30rpx]" :model="form" label-width="0">
      <u-form-item>
        <u-input v-model="form.username" type="digit" maxlength="20" :focus="true" placeholder="请输入手机号" />
      </u-form-item>
      <u-form-item>
        <u-input v-model="form.password" type="password" maxlength="20" placeholder="请输入密码" />
      </u-form-item>
    </u-form>

    <u-button type="warning" class="w-11/12 mt-9" :disabled="!form.username || !form.password" @click="handleLogin"
      :ripple="true">登陆
    </u-button>

    <!-- 协议复选框 -->
    <RadioPolicy :checked="checked" @change="radioChange" />
  </div>
</template>

<script setup>
import { loginRequest } from "@/utils/login";
import RadioPolicy from "../components/RadioPolicy/index.vue"

let form = $ref({
  username: "",
  password: ""
})
let checked = $ref(false)

onLoad(() => {
  initChecked()
})

/**
 * 初始化复选框状态
 */
function initChecked() {
  checked = process.env.UNI_PLATFORM !== "h5"
}

/**
 * 复选框切换
 */
function radioChange(e) {
  checked = e
}

/**
 * 点击登陆
 */
function handleLogin() {
  loginRequest(form)
}

</script>

<style lang="scss" scoped>

</style>
