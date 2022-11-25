<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <CategoriesCard v-for="category in categories" :key="category.id" :title="category.title"
                :count="category.count" :image="category.image" />
        </div>
    </div>
</template>

<script>
import CategoriesCard from "@/components/CategoriesCard";
import { reactive } from "vue";

export default {
    name: 'CategoriesComponent',
    components: {
        CategoriesCard,
    },

    setup() {
        const categories = reactive([
            { id: 1, title: 'Nuxt Developer', count: 444, image: 'hero-image.d325d3ed.png' },
            { id: 2, title: 'Flutter Developer', count: 111, image: 'hero-image.d325d3ed.png' },
            { id: 3, title: 'Php Developer', count: 222, image: 'hero-image.d325d3ed.png' },
            { id: 4, title: 'Vue Developer', count: 333, image: 'hero-image.d325d3ed.png' }
        ])

        return {
            categories
        }
    }
}
</script>

<style>

</style>