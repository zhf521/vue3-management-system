<template>
  <div class="container">
    <!-- 内容区域 -->
    <div class="screen" ref="screen">
      <!-- 上 -->
      <div class="top">
        <Top></Top>
      </div>
      <!-- 下 -->
      <div class="bottom">
        <div class="left">
          <LeftTopChart class="left-top"></LeftTopChart>
          <LeftCenterChart class="left-center"></LeftCenterChart>
          <LeftBottomChart class="left-bottom"></LeftBottomChart>
        </div>
        <div class="center">
          <MapChart class="map"></MapChart>
          <LineChart class="line"></LineChart>
        </div>
        <div class="right">右</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Top from '../components/screen/Top.vue'
import LeftTopChart from '../components/screen/LeftTopChart.vue'
import LeftCenterChart from '../components/screen/LeftCenterChart.vue'
import LeftBottomChart from '../components/screen/LeftBottomChart.vue'
import MapChart from '../components/screen/MapChart.vue'
import LineChart from '../components/screen/LineChart.vue'

// 获取数据大屏展示内容盒子的DOM元素
let screen = ref()
onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
})

// 定义大屏缩放的比例
function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh
}

// 监听视口变化
window.onresize = () => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
}
</script>
<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: url(../assets/bg.png) no-repeat;
  background-size: cover;

  .screen {
    position: fixed;
    width: 1920px;
    height: 1080px;
    left: 50%;
    top: 50%;
    transform-origin: left top;

    .top {
      width: 100%;
      height: 40px;
    }

    .bottom {
      display: flex;

      .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: 40px;
      }

      .left {
        flex: 1;
        height: 1040px;
        display: flex;
        flex-direction: column;

        .left-top {
          flex: 1.2;
        }

        .left-center {
          flex: 1;
        }

        .left-bottom {
          flex: 1;
        }
      }

      .center {
        flex: 1.5;
        display: flex;
        flex-direction: column;

        .map {
          flex: 4;
        }

        .line {
          flex: 1;
        }
      }
    }
  }
}
</style>