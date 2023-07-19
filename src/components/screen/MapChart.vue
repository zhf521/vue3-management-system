<template>
  <div class="box" ref="map"></div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import ChinaJSON from './China.json'
// 获取DOM
let map = ref()
// 注册中国地图
echarts.registerMap('China', ChinaJSON as any)
onMounted(() => {
  let myChart = echarts.init(map.value)
  myChart.setOption({
    //地图组件
    geo: {
      map: 'China',//中国地图
      roam: true,//鼠标缩放的效果
    },
  })
})
</script>
