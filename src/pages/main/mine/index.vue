<template>
  <div>
    <!-- 头像昵称部分 -->
    <div class="flex items-center justify-between p-3 pb-0">
      <!-- 左 -->
      <div class="flex items-center gap-3">
        <u-avatar :show-level="!!userInfo.daysDue" size="100" :src="userInfo.userpic" />
        <div>
          <div class="text-[32rpx] font-bold">{{userInfo?.nickname || '点击登录'}}</div>
          <span v-if="token" class="text-[20rpx] bg-main text-white px-1 rounded">
            {{userInfo.daysDue?'易招标vip会员':'开通会员'}}
          </span>
        </div>
      </div>
      <!-- 右 -->
      <div class="center text-[#777]">
        <span class="text-[24rpx]">设置</span>
        <u-icon name="arrow-right" color="#aaa" />
      </div>
    </div>
    <!-- 会员部分 -->
    <div class="bg-gradient-to-b from-transparent to-[#fedfc6] h-[140rpx] flex items-end justify-center">
      <div class="bg-main h-[110rpx] w-[93%] rounded-t px-3 py-2 flex items-center justify-between _active">
        <!-- 左 -->
        <div class="flex flex-col justify-between h-full">
          <div class="text-[30rpx] font-bold text-white">
            <span>正福易找标</span>
            <span class="italic tracking-wider">VIP</span>
          </div>
          <div class="text-[20rpx] text-gray-100">
            {{userInfo.daysDue? `${userInfo.dueTime} 到期` : '畅享易找标会员特权'}}
          </div>
        </div>
        <!-- 右 -->
        <div class="center text-[#eee]">
          <span class="text-[24rpx] bg-[#ffd6b5] text-main px-1 rounded-xl">
            {{userInfo.daysDue?'订阅器':'开通会员'}}
          </span>
          <u-icon name="arrow-right" size="24" color="#eee"></u-icon>
        </div>

      </div>
    </div>
    <!-- 金刚区 -->
    <div>

    </div>
  </div>
</template>

<script setup>

let { userInfo, token } = useUserStore()

</script>

<style lang="scss" scoped>
.isVip {
  @apply bg-main;
}

.noVip {
  border: 1px solid #f68d3781;
  border-bottom: none;
  background: #ffddc2;
}
</style>
