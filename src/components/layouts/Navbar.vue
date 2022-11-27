<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
            <Logo />
            <NavigaionLinks />
            <UserInfo v-if="isLoggedIn" :user="user.data" />
            <Buttom v-else />
        </div>
    </nav>
</template>

<script>
import Logo from '@/components/layouts/Logo'
import NavigaionLinks from '@/components/layouts/NavigationLinks'
import UserInfo from '@/components/layouts/UserInfo'
import Buttom from '@/components/layouts/Buttom'
import { useUserStore } from '@/stores/user'
import { onMounted, computed } from 'vue';
export default {
    name: 'NavbarComponent',
    components: {
        Logo,
        NavigaionLinks,
        Buttom,
        UserInfo,
    },
    setup() {

        const store = useUserStore()

        onMounted(() => {
            store.fetchUser()
        })

        const isLoggedIn = computed(() =>
            store.isLogedIn
        )

        const user = computed(() =>
            store.getUser
        )
        return {
            isLoggedIn,
            user
        }
    }
}
</script>
