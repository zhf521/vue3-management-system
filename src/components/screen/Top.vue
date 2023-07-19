<template>
  <div class="top">
    <div class="left">
      <span class="lBtn" @click="goHome">首页</span>
    </div>
    <div class="center">
      <div class="title">智慧旅游可视化大数据平台</div>
    </div>
    <div class="right">
      <span class="rBtn">统计报告</span>
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
let timer = ref(0)
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
    justify-content: space-between;
    align-items: center;

    .rBtn {
      width: 150px;
      height: 40px;
      float: left;
      background: url(../../assets/dataScreen-header-btn-bg-r.png) no-repeat;
      background-size: 100% 100%;
      text-align: center;
      line-height: 40px;
      color: #29fcff;
    }

    .time {
      color: #29fcff;
      font-size: 20px;
      margin-right: 10px;
    }
  }
}
</style>