<template>
  <div>
    <h1>Posts list</h1>
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

<style lang="scss" scoped>
.posts-list-container{
  width: 450px;
  display: grid;
  grid-template-rows: 1fr;
  gap: 0.5rem;
}
</style>