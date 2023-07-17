<template>
  <div>
    <h1>可拖拽看板</h1>

    <div class="board">
      <div class="column" v-for="(column, index) in columns" :key="index" @dragover="allowDrop" @drop="handleDrop(column)"
        :class="{ 'bg-blue': column.title === 'To Do', 'bg-red': column.title === 'In Progress', 'bg-green': column.title === 'Done' }">
        <h2 style="color:cornsilk;">{{ column.title }}</h2>
        <div class="task-list">
          <div class="task" v-for="(task, taskIndex) in column.tasks" :key="taskIndex"
            @dragstart="handleDragStart(column, taskIndex)" draggable="true">
            {{ task }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  { title: 'To Do', tasks: ['Task 1', 'Task 2', 'Task 3'] },
  { title: 'In Progress', tasks: ['Task 4', 'Task 5', 'Task 6'] },
  { title: 'Done', tasks: ['Task 7', 'Task 8', 'Task 9'] },
])

// 存储被拖拽的列和任务的索引值
let draggedColumn: any = null
let draggedTaskIndex: any = null

// 定义允许拖放操作函数
const allowDrop = (event: any) => {
  event.preventDefault()
}

// 定义开始拖动时触发的函数
const handleDragStart = (column: any, taskIndex: number) => {
  draggedColumn = column
  draggedTaskIndex = taskIndex
}

// 定义拖动元素在目标元素上释放时触发的事件
const handleDrop = (column: any) => {
  // task是被拖动的事件
  const task = draggedColumn.tasks[draggedTaskIndex]
  console.log(task)
  draggedColumn.tasks.splice(draggedTaskIndex, 1)
  column.tasks.push(task)
}

</script>

<style scoped lang="scss">
.board {
  display: flex;

  .column {
    flex: 1;
    margin: 10px;
    padding: 20px;
    border-radius: 5px;

    .task-list {
      min-height: 100px;
      margin-top: 10px;
      border: 1px solid gray;
      border-radius: 5px;
      padding: 5px;

      .task {
        margin: 5px;
        padding: 10px;
        background-color: rgb(229, 232, 240);
        border: 1px solid gray;
        border-radius: 5px;
      }
    }
  }
}

.bg-red {
  background-color: #f9944a;
}

.bg-green {
  background-color: #2ac06d;
}

.bg-blue {
  background-color: #4a9ff9;
}
</style>