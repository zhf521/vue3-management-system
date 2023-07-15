import { defineStore } from 'pinia'

export interface ListItem{
  id: number
  content: string
  complete:boolean
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    id: 1,
    todoList: <ListItem[]> [
    {
      id: 0,
      content: '0',
      complete:true,
    },
    ]
  }),
  actions: {
    addTodo(value: string) {
      this.todoList.push({id:this.id++,content:value,complete:false})
    },
    delTodo(itemId: number) {
      this.todoList = this.todoList.filter(item => item.id !== itemId)
    }
  },

})