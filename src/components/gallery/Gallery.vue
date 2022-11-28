<template>
    <section id="gallery">
        <img :src="thumbnail" alt="" class="w-full mt-6 rounded-2xl">
        <div class="grid grid-cols-4 gap-4 mt-4">

            <div v-for="gallery in galleries" :key="gallery.id">
                <div @click="changeImage(gallery.url)" class="overflow-hidden cursor-pointer rounded-2xl"
                    :class="{ 'ring-2 ring-indigo-500': thumbnail == gallery.url }">
                    <img :src="gallery.url" class="w-full" alt="image">
                </div>
            </div>

        </div>
    </section>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'GalleryComponent',
    props: {
        defaultImage: String,
        galleries: Array,
    },

    setup(props) {

        const thumbnail = ref(props.defaultImage)

        function changeImage(image) {
            thumbnail.value = image
        }

        return {
            changeImage,
            thumbnail,
        }
    }
}
</script>

<style>

</style>