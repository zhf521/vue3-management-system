<template>
  <div>
    <!-- 上栏 -->
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
    <!-- 中栏 -->
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover">
          <h2>商品类别占比</h2>
          <PieCard></PieCard>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card shadow="hover">
          <h2>商品销售利润率</h2>
          <LineCard></LineCard>
        </el-card>
      </el-col>
    </el-row>
    <!-- 下栏 -->
    <el-row :gutter="20" style="margin-top: 10px;">
      <el-col :span="24">
        <TabCard></TabCard>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import Card from '../components/Card.vue'
import Statistic from '../components/Statistic.vue'
import TodoList from '../components/TodoList.vue'
import PieCard from '../components/charts/PieCard.vue'
import LineCard from '../components/charts/LineCard.vue'
import TabCard from '../components/charts/TabCard.vue'
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
</style>