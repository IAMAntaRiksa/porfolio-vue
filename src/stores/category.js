import { defineStore } from 'pinia'
import Api from '../api/Api'

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        category: {},
    }),
    getters: {
        getCatogories: (state) => state.categories,
        getDetailCatogories: (state) => state.category
    },

    actions: {
        fetchCategoriesLimit() {
            return new Promise((resolve, reject) => {
                Api.get('/categories?limit=4').then((response) => {
                    this.categories = response.data.data.data
                    resolve
                }).catch((error) => {
                    reject(error)
                });
            });
        },
        fetchCategories() {
            return new Promise((resolve, reject) => {
                Api.get('/categories').then((response) => {
                    this.categories = response.data.data.data
                    resolve
                }).catch((error) => {
                    reject(error)
                });
            });
        },
        fetchDetailCategories(id) {
            return new Promise((resolve, reject) => {
                Api.get(`/categories?id=${id}`).then((response) => {
                    this.categories = response.data.data.products;
                    this.category = response.data.data
                    resolve
                }).catch((error) => {
                    reject(error)
                });
            });

        }
    }
})