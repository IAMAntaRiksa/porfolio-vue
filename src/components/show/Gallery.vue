<template>
    <section id="gallery">
        <img :src="'img/' + defaultImage" alt="defaultImage" class="w-full mt-6 rounded-2xl">
        <div class="grid grid-cols-4 gap-4 mt-4">

            <div v-for="gallery in galleries" :key="gallery.id" class="overflow-hidden cursor-pointer rounded-2xl"
                :class="{ 'ring-2 ring-indigo-500': defaultImage == gallery.image }">
                <img :src="'img/' + image" class="w-full" alt="image">
            </div>

        </div>
    </section>
</template>

<script>
import { reactive } from 'vue';
export default {
    name: 'GalleryComponent',

    setup() {
        const defaultImage = reactive('hero-image.d325d3ed.png')
        const galleries = reactive(
            { id: 1, image: 'hero-image.d325d3ed.png' },
            { id: 2, image: 'hero-image.d325d3ed.png' },
            { id: 3, image: 'hero-image.d325d3ed.png' },
            { id: 4, image: 'hero-image.d325d3ed.png' },
        )
        return {
            galleries,
            defaultImage
        }
    }
}
</script>

<style>

</style>