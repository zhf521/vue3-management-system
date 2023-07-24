<template>
  <div class="top">
    <div class="left">
      <span></span>
      <span class="lBtn" @click="goHome">首页</span>
    </div>
    <div class="center">
      <div class="title">智慧旅游可视化大数据平台</div>
    </div>
    <div class="right">
      <span></span>
      <span class="time">{{ time }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue'
import moment from 'moment'

const router = useRouter()
// 点击首页
const goHome = () => {
  router.push('/dashboard')
}
// 当前时间
let time = ref(moment().format('YYYY年MM月DD日 hh:mm:ss'))
let timer: any
onMounted(() => {
  timer = setInterval(() => {
    time.value = moment().format('YYYY年MM月DD日 hh:mm:ss')
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer.value)
})

</script>
<style scoped lang="scss">
.top {
  width: 100%;
  height: 40px;
  display: flex;

  .left {
    flex: 1;
    background: url(../../assets/dataScreen-header-left-bg.png) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .lBtn {
      width: 150px;
      height: 40px;
      float: right;
      background: url(../../assets/dataScreen-header-btn-bg-l.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      color: #29fcff;
      line-height: 40px;
    }
  }

  .center {
    flex: 2;

    .title {
      width: 100%;
      height: 74px;
      background: url(../../assets/dataScreen-header-center-bg.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 74px;
      color: #29fcff;
      font-size: 30px;
    }
  }

  .right {
    flex: 1;
    background: url(../../assets/dataScreen-header-right-bg.png) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    .time {
      color: #29fcff;
      font-size: 20px;
      margin-right: 10px;
    }
  }
}
</style>