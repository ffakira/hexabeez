<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <p>{{title}}</p>

    <ul>
      <li v-for="(link, index) in links" v-bind:key="index">
        {{ link }}
        <button v-on:click="removeLinks(index)" class="rm">Removes</button>
      </li>
    </ul>

    {{newMsg}}
    <button v-on:click="removeAllLinks">Remove all links</button>

    <hr />
    <stats />

    <form @submit.prevent="addLink">
      <input type="text" placeholder="Add a link" v-model="newLink" class="link-input">
    </form>
  </div>
</template>

<script>
import Stats from '@/components/Stats.vue';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      newLink: '',
      newMsg: ''
    }
  },

  props: {
    msg: String
  },

  methods: {
    ...mapMutations([
      'ADD_LINK',
      'REMOVE_ALL'
    ]),
    ...mapActions([
      'removeLink',
      'removeAll'
    ]),
    removeLinks: function(link) {
      this.removeLink(link);
    },
    addLink: function() {
      this.ADD_LINK(this.newLink);
      this.newLink = ''
    },
    removeAllLinks() {
      this.removeAll().then(() => this.newMsg = "They have been removed")
    }
  },

  components: {
    Stats
  },
  computed: {
    ...mapState([
      'title',
      'links'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }

  .hello {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: 100%;
    grid-template-areas:
      "left right";
    height: 100%;
  }

  .left, .right {
    padding: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ul li {
    padding: 20px;
    background: white;
    margin-bottom: 8px;
  }

  .right {
    grid-area: right;
    background-color: #E9E9E9;
  }
</style>
