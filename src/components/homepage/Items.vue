<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <ItemCard v-for="item in items" :key="item.id" :title="item.title" :description="item.description"
                :image="item.image" />
        </div>
    </div>
</template>

<script>
import ItemCard from '@/components/ItemCard'
import { reactive } from 'vue';
export default {
    name: 'ItemsComponent',
    components: {
        ItemCard,
    },

    setup() {
        const items = reactive([
            { id: 1, title: 'Nuxt Developer', description: '444', image: 'hero-image.d325d3ed.png' },
            { id: 2, title: 'Flutter Developer', description: '111', image: 'hero-image.d325d3ed.png' },
            { id: 3, title: 'Php Developer', description: '222', image: 'hero-image.d325d3ed.png' },
        ]);
        return {
            items
        }
    }
}
</script>

<style>

</style>