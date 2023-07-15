<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="card">
          <Card></Card>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover" class="card">
          <Statistic></Statistic>
        </el-card>
      </el-col>
      <el-col :span="10">
        <el-card shadow="hover" class="card">
          <TodoList></TodoList>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <h2>商品类别占比</h2>
          <div class="pie-container"></div>
        </el-card></el-col>
      <el-col :span="16">
        <el-card shadow="hover">
          <h2>商品销售利润率</h2>
          <div class="line-container" />
        </el-card></el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 10px;">
      <el-col :span="24">
        <el-card shadow="hover">
          <el-tabs>
            <el-tab-pane label="销售额"></el-tab-pane>
            <el-tab-pane label="访问量"></el-tab-pane>
          </el-tabs>
          <div class="data-analysis-container">
            <div class="histogram-container">
              <div class="rank">
                <h4>门店排名</h4>
                <ul>
                  <li>
                    <span class="rankingItemNumber">
                    </span>
                    <span class="rankingItemName">name</span><span>value</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import Card from '../components/Card.vue'
import Statistic from '../components/Statistic.vue'
import TodoList from '../components/TodoList.vue'
</script>
<style scoped lang="scss">
.el-card .el-card__body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 100%;
  height: 260px;
  margin-bottom: 10px;
}

.pie-container {
  height: 260px;
}

.line-container {
  height: 260px;
}

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