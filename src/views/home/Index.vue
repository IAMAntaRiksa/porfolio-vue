<template>
    <main>
        <Hero />
        <Categories />
        <Items />
    </main>
</template>

<script>
import Hero from '@/components/homepage/Hero'
import Categories from '@/components/homepage/Categories'
import Items from '@/components/homepage/Items'
export default {
    name: 'HomeComponent',
    components: {
        Hero,
        Categories,
        Items
    }
}
</script>

<style>

</style>