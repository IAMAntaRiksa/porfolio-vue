import { defineStore } from 'pinia'
import Api from '../api/Api'

export const useItemStore = defineStore('product', {
    state: () => ({
        items: [],
        item: {}
    }),

    getters: {
        getItems: (state) => state.items,
        getDetailItems: (state) => state.item,
    },

    actions: {
        async fetchItems() {
            try {
                const response = await Api.get('/products')
                this.items = response.data.data.data
            } catch (error) {
                console.log(error)
            }
        },

        async fetchDetailItems(id) {
            try {
                const response = await Api.get(`/products?id=${id}`)
                this.item = response.data.data
            } catch (error) {
                console.log(error)
            }
        }
    }
})