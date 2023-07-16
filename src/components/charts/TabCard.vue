<template>
  <el-card shadow="hover">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="销售额" name="sales"></el-tab-pane>
      <el-tab-pane label="访问量" name="visits"></el-tab-pane>
      <div class="data-analysis-container">
        <div class="histogram-container" ref="histogram"></div>
        <div class="rank">
          <h4>门店{{ tabName[activeName] }}排名</h4>
          <ul>
            <li v-for="(item, index) in storeData" :key="item.name">
              <span class="rankingItemNumber" :class="{ top: index < 3 }">{{ index + 1 }}
              </span>
              <span class="rankingItemName">{{ item.name }}</span><span>{{ item.value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </el-tabs>
  </el-card>
</template>
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const histogram = ref()
const activeName = ref('sales')
let myHistogram: echarts.ECharts
const tabName: { [key: string]: string } = {
  sales: '销售额',
  visits: '访问量',
}

const optionSales: echarts.EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: '销售额',
      type: 'bar',
      barWidth: '60%',
      data: [120, 200, 150, 80, 70, 110, 130, 140, 180, 190, 100, 90],
    },
  ],
}

const optionVisits: echarts.EChartsOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: '访问量',
      type: 'bar',
      barWidth: '60%',
      data: [
        8034, 12230, 11042, 7054, 6032, 9560, 10350, 15620, 15460, 14360, 8090,
        7490,
      ],
    },
  ],
}

const storeData = [
  {
    name: '工专路 0 号店',
    value: 2309,
  },
  {
    name: '工专路 1 号店',
    value: 2309,
  },
  {
    name: '工专路 2 号店',
    value: 2309,
  },
  {
    name: '工专路 3 号店',
    value: 2309,
  },
  {
    name: '工专路 4 号店',
    value: 2309,
  },
  {
    name: '工专路 5 号店',
    value: 2309,
  },
]

onMounted(() => {
  myHistogram = echarts.init(histogram.value)
  myHistogram.setOption(optionSales)
})

const handleClick = (tab: TabsPaneContext, event: Event) => {
  if (tab.props.name === 'sales') {
    myHistogram.clear()
    myHistogram.setOption(optionSales)
  } else if (tab.props.name === 'visits') {
    myHistogram.clear()
    myHistogram.setOption(optionVisits)
  }
}
</script>
<style lang="scss" scoped>
.data-analysis-container {
  height: 260px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
}

.rank {
  height: 260px;
  width: 400px;
}

.histogram-container {
  height: 260px;
  flex-grow: 1;
}

ul {
  list-style: none;
  padding: 5px;

  li {
    padding: 3px;
    display: flex;
    align-items: center;

    .rankingItemNumber {
      display: inline-block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      color: #000;
      text-align: center;
      border-radius: 50%;
      background-color: #fafafa;
      margin-right: 10px;
    }

    .top {
      background-color: #314659;
      color: #fff;
    }

    .rankingItemName {
      flex-grow: 1;
    }
  }
}
</style>