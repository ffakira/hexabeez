<template>
  <div id="app">
    <div id="nav">
      <Nav />
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Nav from '@/views/Nav.vue';
  export default {
    components: {
      Nav
    }
  }
</script>