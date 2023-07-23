<template>
  <div class="container">
    <el-card class="card-left">
      <template #header>
        <div>
          <span>基础信息</span>
        </div>
      </template>
      <div class="user">
        <img class="img" src="../assets/logo.png" alt="">
        <div class="name">name</div>
        <div>道阻且长，行则将至</div>
      </div>
      <div class="tag">
        <div class="tag-name">标签</div>
        <el-tag v-for="tag in tags" :key="tag" class="mx-1" closable :disable-transitions="false"
          @close="handleClose(tag)">
          {{ tag }}
        </el-tag>
        <el-input v-if="inputVisible" ref="InputRef" style="width: 100px;" v-model="inputValue" class="ml-1 w-20"
          size="small" @keyup.enter="handleInputConfirm" @blur="handleInputConfirm" />
        <el-button v-else class="el-tag button-new-tag ml-1" size="small" @click="showInput">
          +
        </el-button>
      </div>
    </el-card>
    <el-card class="card-right">
      <template #header>
        <div>
          <span>账户编辑</span>
        </div>
      </template>
      <div></div>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import { ElInput } from 'element-plus'

const inputValue = ref('')
const tags = ref(['魔方', '学习', '数码'])
const inputVisible = ref(false)
const InputRef = ref<InstanceType<typeof ElInput>>()

const handleClose = (tag: string) => {
  tags.value.splice(tags.value.indexOf(tag), 1)
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    tags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  height: 400px;

  .card-left {
    flex: 1;
    height: 100%;
    margin: 10px;

    .user {
      text-align: center;

      .img {
        width: 104px;
        height: 104px;
        border-radius: 50%;
        margin-bottom: 20px;
      }

      .name {
        color: black;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 4px;
      }
    }

    .tag {
      margin-top: 10px;

      .tag-name {
        margin-bottom: 5px;
      }

      .el-tag,
      .el-input {
        margin-right: 8px;
        margin-bottom: 8px;
      }
    }
  }

  .card-right {
    flex: 1;
    height: 100%;
    margin: 10px;
  }



}
</style>