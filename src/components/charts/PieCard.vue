<template>
  <div class="pie-container" ref="pie"></div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const pie = ref()

const PieOption: echarts.EChartsOption = {
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: '0px',
    top: '10px',
  },
  series: [
    {
      name: '销售额',
      type: 'pie',
      radius: ['40%', '70%'],
      left: '80px',
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 32,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: '商品A' },
        { value: 735, name: '商品B' },
        { value: 580, name: '商品C' },
        { value: 484, name: '商品D' },
        { value: 300, name: '商品E' },
      ],
    },
  ],
}

onMounted(() => {
  const chart = echarts.init(pie.value)
  chart.setOption(PieOption)
})
</script>
<style lang="scss" scoped>
.pie-container {
  height: 260px;
}
</style>