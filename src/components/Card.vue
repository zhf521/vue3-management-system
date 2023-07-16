<template>
  <div class="title">
    <div class="intro">
      <div class="title">
        <img src="https://zhf521.github.io/mynotes/logo.png" alt="" />
        <h1>管理员 - zhf</h1>
      </div>
      <div class="todolist">
        <h3 style="margin-bottom: 10px">TODO List</h3>
        <span>首页</span><el-progress :percentage="65.5" color="#42b983" />
        <span>代办列表</span><el-progress :percentage="10.5" color="#f1e05a" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.tile {
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease-out;

  &:hover .intro {
    opacity: 0.1;
  }

  &:hover .animate-text {
    transform: translateX(0);
    opacity: 1;
  }

  &:hover span {
    opacity: 1;
    transform: translateY(0px);
  }

  .intro {
    width: 100%;
    position: absolute;
    transition: all 0.4s ease-out;

    .title {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }

    h1 {
      margin-left: 10px;
      font-weight: 300;
      text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    }

    span {
      font-size: 14px;
      color: #606266;
    }
  }
}

img {
  vertical-align: middle;
  width: 80px;
  border-radius: 50%;
}
</style>