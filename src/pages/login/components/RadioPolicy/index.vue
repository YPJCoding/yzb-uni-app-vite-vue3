<template>
  <div class="text-[24rpx] center mt-10">
    <radio class="scale-[0.55]" color="#f67b14" :checked="checked" @click="handleRadio"></radio>
    <span class="text-stone-500">登录代表您已同意</span>
    <span class="text-main">《用户协议》</span>、<span class="text-main">《隐私政策》</span>
  </div>
</template>

<script setup>
let props = defineProps({
  checked: {
    type: Boolean,
    default: () => false
  }
})

let emits = defineEmits(['change'])

function handleRadio() {
  emits('change', !props.checked)
}
</script>

<style lang="scss" scoped>

</style>
