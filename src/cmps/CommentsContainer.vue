<template>
  <div>
    <div class="add-comment-container">
      <form @submit.prevent="onAddComment">
          <input type="text" v-model="newCommentTxt" placeholder="Add new comment..." />
          <button>Send</button>
      </form>
    </div>
    <comment v-for="comment of comments" :key="comment.id" :comment="comment"/>
  </div>
</template>

<script>
import Comment from './Comment.vue';
export default {
  components: { Comment },
    props: ['comments', 'postId'],
    data() {
        return {
            newCommentTxt: ''
        }
    },
    methods: {
        async onAddComment() {
            await this.$store.dispatch({ type: "addComment", postId: this.postId, commentTXT:this.newCommentTxt });
            this.newCommentTxt = ''
        }
    }
};
</script>

<style>
</style>