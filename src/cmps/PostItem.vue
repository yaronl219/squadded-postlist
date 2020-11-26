<template>
  <div class="post-container">
    <div class="post-header">
      <div class="avatar-container">
        <img src="post.author.img" alt="avatar" />
      </div>
      <div class="post-author-name">
        <h5>{{ post.author.name }}</h5>
      </div>
    </div>
    <div class="post-main">
      <div
        class="post-product-title"
        style="
           {
            backgroundimage: url('');
          }
        "
      >
        {{ post.product.title }}
      </div>
    </div>
    <div class="post-footer">
      <div class="price-container">
        <span>€{{ post.product.price }}</span>
      </div>
      <div class="interaction-container">
        <div @click="toggleCommentOpen" class="chat-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Speech_bubble.svg"
          />
          <span>{{ post.comment.length }}</span>
        </div>
        <LikeCounter :like="post.like" @onLike="onLike" />
      </div>
    </div>
    <div v-if="isCommentsOpen">
      <CommentsContainer :comments="post.comment" :postId="post.id" />
    </div>
  </div>
</template>

<script>
import CommentsContainer from "./CommentsContainer.vue";
import LikeCounter from "./LikeCounter";

export default {
  data() {
    return {
      isCommentsOpen: false,
    };
  },
  components: {
    LikeCounter,
    CommentsContainer,
  },
  props: ["post"],
  methods: {
    onLike() {
      this.$store.dispatch({ type: "toggleLikePost", postId: this.post.id });
    },
    toggleCommentOpen() {
      this.isCommentsOpen = !this.isCommentsOpen;
    },
  },
};
</script>

<style>
</style>