<template>
  <div class="app">
    <div class="posts-list-container">
      <PostItem v-for="post in postsToShow" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import PostItem from "./cmps/PostItem.vue";

export default {
  components: {
    PostItem,
  },
  computed: {
    postsToShow() {
      return this.$store.getters.postsToShow;
    },
  },
  async created() {
    this.loadPosts();
  },
  methods: {
    async loadPosts() {
      this.$store.dispatch({ type: "loadPosts" });
    },
  },
};
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.app {
  display: flex; 
  flex-direction: column;
  background-color: #DDDDDD;
}

.posts-list-container{
  // max-width: 450px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 20rem));
  gap: 0.5rem;
  padding: 1rem; 
}


* {
  font-family: 'Montserrat', sans-serif;
}


</style>