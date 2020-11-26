<template>
  <div class="post-container">
    <div class="post-header">
      <div class="avatar-container">
        <img :src="post.author.img" alt="avatar" />
      </div>
      <div class="post-author-name">
        <span>{{ post.author.name }}</span>
      </div>
    </div>
    <div class="post-main" v-bind:style="{ 'background-image': 'url(' + post.product.img + ')' }">
          <div class="product-mask">
      <div class="post-product-title">
        {{ post.product.title }}
          </div>
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
        <div class="like-container">
          <LikeCounter :like="post.like" @onLike="onLike" />
        </div>
      </div>
    </div>
    <div class="comments-container" v-if="isCommentsOpen">
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

<style lang="scss" scoped>
.post-container {
  background-color: #fafafa;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;

  box-shadow: 0px 3px 3px 1px rgba(32, 32, 32, 0.6);
  img {
    width: 100%;
  }
}

.post-header {
  display: flex;
  padding: 0.125rem 0.5rem;
  .avatar-container {
    width: 2rem;
    border-radius: 100%;
    overflow: hidden;
  }
  .post-author-name {
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
  }
}

.post-footer {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem;
  align-items: center;
  .interaction-container {
    display: flex;
    align-items: center;
  }

  .like-container,
  .chat-btn {
    cursor: pointer;
    width: 2rem;
    margin: 0.125rem;
    position: relative;
    height: fit-content;
    display: flex;
    align-items: center;
    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.75rem;
    }
  }
}

.post-main {
    height: 13rem;
    background-size: cover;
    background-position: center;
    position: relative;

    .product-mask {
        width: 100%;
        height: 100%;
        background: linear-gradient(5deg, rgba(64,64,64,0.7) 0%, rgba(64,64,64,0) 60%);
    }
    .post-product-title {
        position: absolute;
        bottom: 0.25rem;
        left: 0.25rem;
        color: white;
    }
}
.comments-container {
  height: 100%;
}
</style>