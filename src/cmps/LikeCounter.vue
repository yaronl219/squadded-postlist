<template>
  <div class="like-container">
      <div @click="onClickLike" class="heart-container">
          <img v-if="like.likedAt" src="../assets/full-heart.svg" />
          <img v-else src="../assets/empty-heart.svg" />
      </div>
      
      <div class="like-count">
      {{likeCount}}
      </div>
  </div>
</template>

<script>
export default {
  props: ["like"],
  methods: {
      onClickLike() {
          this.$emit('onLike')
      }
  },
  computed: {
    likeCount() {
      const like = this.like;
      if (!like.likesAmount) {
        return "";
      }
      if (like.likesAmount > 1000) {
        const thousands = (like.likesAmount - (like.likesAmount % 1000)) / 1000;
        return `${thousands}k`;
      }
      return like.likesAmount;
    },
  },
};
</script>

<style>
</style>