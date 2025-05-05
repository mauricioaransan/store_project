import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
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
    addProduct(product: any) {
      const found = this.items.find((item) => item.id === product.id)
      if (found) {
        found.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    removeProduct(id: any) {
      this.items = this.items.filter((item) => item.id !== id)
    },
    clearCart() {
      this.items = []
    },
    getTotal() {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    getFormattedMessage() {
      const message = this.items
        .map((item) => `${item.name} - S/ ${item.price} x ${item.quantity}`)
        .join('\n')
      return `Hola, quisiera cotizar los siguientes productos:\n\n${message}\n\nTotal: S/ ${this.getTotal()}`
    },
  },
})
