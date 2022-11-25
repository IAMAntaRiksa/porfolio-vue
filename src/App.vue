<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>


<script set>
import Navbar from '@/components/layouts/Navbar';
export default {
  name: 'AppComponent',
  components: {
    Navbar
  }
}
</script>

<style>
@import "@/assets/css/styles.css";
</style>
