<template>
  <div @click="onClose" class="user-details-backdrop">
    <div @click.stop="" v-if="user" class="user-details-container">
      <div class="user-details-header">
        <div class="avatar-container">
          <img :src="user.img" alt="avatar" />
        </div>
        <div class="user-name">
          <span>{{ user.name }}'s Posts</span>
        </div>
        <div @click="onClose" class="close-container">
          <img src="../assets/close-icon.svg" alt="close" />
        </div>
      </div>
      <div class="user-posts-container">
        
        <div class="post-list">
          <PostItem v-for="post in user.posts" :key="post.id" :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { postsService } from "../services/postsService";
import PostItem from "./PostItem.vue";

export default {
  components: { PostItem },
  data() {
    return {
      user: null,
    };
  },
  async created() {
    this.loadUser();
  },
  props: ["id"],
  watch: {
    $route() {
      this.loadUser();
    },
  },
  methods: {
    async loadUser() {
      const user = await postsService.getUserDetails(this.id);
      if (user) return (this.user = user);
    },
    onClose() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.user-details-backdrop {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(32, 32, 32, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.user-details-container {
  width: 18rem;
  background-color: #ddd;
  min-height: 10rem;
  padding: 0.5rem;
  position: relative;
}

.user-details-header {
  display: flex;
  padding: 0.125rem;
  margin-bottom: 0.375rem;
  .avatar-container {
    width: 2rem;
    border-radius: 100%;
    overflow: hidden;
  }
  .user-name {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
  }
}

h3 {
  text-align: center;
  margin-top: 0;
}
.post-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

.close-container {
  box-sizing: border-box;
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 0;
  padding: 0.5rem;
  top: 0;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.3s;
  margin: 0.125rem;
  &:hover {
    background-color: rgba(32, 32, 32, 0.3);
  }
}
</style>