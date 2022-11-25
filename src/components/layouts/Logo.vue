<template>
    <router-link :to="{ name: 'home' }" class="flex items-center">
        <img src="@/assets/img/logo.svg" class="h-8 ml-3 sm:ml-0 sm:h-8" alt="Zullkit Logo" />
    </router-link>
</template>

<script>
export default {
    name: 'LogoComponent'
}
</script>

<style>

</style>