<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <ItemCard v-for="item in items" :key="item.id" :id="item.id" :title="item.name" :description="item.subtitle"
                :image="item.thumbnails" />
        </div>
    </div>
</template>

<script>

import ItemCard from '@/components/ItemCard'
import { computed, onMounted } from "vue";
import { useItemStore } from '@/stores/item'


export default {
    name: 'ItemsComponent',
    components: {
        ItemCard,
    },

    setup() {
        const store = useItemStore()

        onMounted(() => {
            store.fetchItems()
        })

        const items = computed(() =>
            store.getItems
        )

        return {
            store,
            items
        }
    },
}
</script>

<style>

</style>