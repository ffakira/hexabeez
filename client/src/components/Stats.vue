<template>
  <div class="stats">
    <p>There are currently {{ countLinks }} links available.</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Stats',
  props: {
    msg: String
  },
  computed: {
    ...mapGetters([
      'countLinks'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

