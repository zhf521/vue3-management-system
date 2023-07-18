import { defineStore } from 'pinia'

interface ListItem {
  name: string
  path: string
  title: string
}

//定义容器
export const useTabsStore = defineStore('tabs', {
  state: () => ({ 
   list: <ListItem[]>[] 
  }),
  actions: {
    setTabsItem(data: ListItem) {
      this.list.push(data)
    },
    delTabsItem(index: number) {
      this.list.splice(index,1)
    }
  },
})