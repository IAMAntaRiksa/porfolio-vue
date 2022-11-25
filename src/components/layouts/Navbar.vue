<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
            <Logo />
            <!-- <UserInfo /> -->
            <NavigaionLinks />
            <Buttom />
        </div>
    </nav>
</template>

<script>
import Logo from '@/components/layouts/Logo'
import NavigaionLinks from '@/components/layouts/NavigationLinks'
import UserInfo from '@/components/layouts/UserInfo'
import Buttom from '@/components/layouts/Buttom'
export default {
    name: 'NavbarComponent',
    components: {
        Logo,
        NavigaionLinks,
        Buttom,
        // UserInfo,
    }
}
</script>
