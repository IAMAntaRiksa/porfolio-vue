<template>
    <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
        <div class="overflow-hidden border border-gray-200 rounded-xl">
            <router-link :to="{ name: 'detail_product', params: { id: id } }">
                <div class="m-4 overflow-hidden rounded-xl">
                    <img :alt="title" class="block w-full h-auto" :src="image" />
                </div>
            </router-link>

            <header class="px-4 mb-4 leading-tight">
                <h1 class="text-lg">
                    <router-link :to="{ name: 'detail_product', params: { id: id } }"
                        class="font-semibold text-black no-underline hover:underline">
                        {{ title }}
                    </router-link>
                </h1>
                <span class="block text-sm font-light text-gray-500 no-underline">
                    {{ count }}
                </span>
            </header>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        title: String,
        image: String,
        count: Number,
    }
}
</script>

<style>

</style>