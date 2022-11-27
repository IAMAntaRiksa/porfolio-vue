<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ category.name }}</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <ItemCard v-for="item in categories" :key="item.id" :title="item.name" :id="item.id"
                :description="item.subtitle" :image="item.thumbnails" />
        </div>
    </div>
</template>
<script>

import ItemCard from '@/components/ItemCard'
import { useRoute } from 'vue-router';
import { useCategoryStore } from '@/stores/category'
import { onMounted, computed } from 'vue'


export default {
    name: 'ItemsComponent',
    components: {
        ItemCard,
    },

    setup() {
        const store = useCategoryStore()
        const route = useRoute()

        onMounted(() => {
            store.fetchDetailCategories(route.params.id)
        })

        const category = computed(() =>
            store.getDetailCatogories
        )
        const categories = computed(() =>
            store.getCatogories
        )
        return {
            store,
            category,
            categories
        }
    },
}
</script>

<style>

</style>