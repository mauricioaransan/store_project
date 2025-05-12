import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    items: [] as Array<{
      id: string
      name: string
      price: number
      quantity: number
      image: string
      category: string
    }>,
  }),
  actions: {
    allItems(product: any) {
      this.items = product
    },
    getAllItems() {
      return this.items
    },
  },
})
