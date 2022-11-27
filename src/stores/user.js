import { defineStore } from 'pinia'
import Api from '../api/Api';
export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: false,
    }),

    getters: {
        isLogedIn: (state) => state.user !== false,
        getUser: (state) => state.user
    },
    actions: {

        async fetchUser() {
            try {
                const token_type = localStorage.getItem('token_type')
                const access_token = localStorage.getItem('access_token')

                const { data } = await Api.get('/user', {
                    headers: {
                        Authorization: token_type + ' ' + access_token
                    }
                })
                this.user = data
            } catch (error) {
                this.user = false
            }
        }
    },
})