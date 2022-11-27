<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">ALL Categories</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <CategoriesCard v-for="category in categories" :key="category.id" :id="category.id" :title="category.name"
                :count="category.products_count" :image="category.thumbnails" />
        </div>
    </div>
</template>

<script>

import CategoriesCard from "@/components/CategoriesCard";
import { useCategoryStore } from '@/stores/category'
import { onMounted, computed } from 'vue'


export default {
    name: 'CategoriesComponent',
    components: {
        CategoriesCard,
    },

    setup() {
        const store = useCategoryStore()

        onMounted(() => {
            store.fetchCategories()
        })

        const categories = computed(() =>
            store.getCatogories
        )
        return {
            store,
            categories
        }
    },
}
</script>

<style>

</style>