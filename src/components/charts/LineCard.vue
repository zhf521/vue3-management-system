<template>
  <div class="line-container" ref="line"></div>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const line = ref()

const LineOption: echarts.EChartsOption = {
  tooltip: {
    trigger: 'axis',
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
    nameTextStyle: {
      align: 'left',
      verticalAlign: 'middle',
    },
    axisLabel: {
      formatter: '利润 {value} %',
    },
  },
  series: [
    {
      name: 'A商品',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' },
        ],
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }],
      },
    },
    {
      name: 'B商品',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }],
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max',
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max',
              },
              type: 'max',
              name: '最高点',
            },
          ],
        ],
      },
    },
  ],
}

onMounted(() => {
  const chart = echarts.init(line.value)
  chart.setOption(LineOption)
})
</script>
<style lang="scss" scoped>
.line-container {
  height: 260px;
}
</style>