<template>
  <div class="app">
    <div class="posts-list-container">
      <PostItem v-for="post in postsToShow" :key="post.id" :post="post" />
    </div>

    <user-details v-if="displayUserDetails" :id="displayUserDetails" />
  </div>
</template>

<script>
import PostItem from "../cmps/PostItem.vue";
import UserDetails from "../cmps/UserDetails.vue";

export default {
  components: {
    PostItem,
    UserDetails,
  },
  computed: {
    postsToShow() {
      return this.$store.getters.postsToShow;
    },
    displayUserDetails() {
      const { id } = this.$route.params;
      if (id) return id;
      return null;
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
.app {
  display: flex;
  flex-direction: column;
  background-color: #dddddd;
}

.posts-list-container {
  // max-width: 450px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(6rem, 20rem));
  gap: 0.5rem;
  padding: 1rem;
}
</style>