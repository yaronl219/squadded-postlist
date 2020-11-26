<template>
  <div class="comments-container">
    <div class="add-comment-container">
      <form @submit.prevent="onAddComment">
        <textarea
          type="text"
          v-model="newCommentTxt"
          placeholder="Add new comment..."
        />
        <button>Send</button>
      </form>
    </div>
    <div class="comments-list">
      <comment
        v-for="comment of comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import Comment from "./Comment.vue";
export default {
  components: { Comment },
  props: ["comments", "postId"],
  data() {
    return {
      newCommentTxt: "",
    };
  },
  methods: {
    async onAddComment() {
      if (!this.newCommentTxt) return;
      await this.$store.dispatch({
        type: "addComment",
        postId: this.postId,
        commentTXT: this.newCommentTxt,
      });
      this.newCommentTxt = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.comments-container {
  background-color: #EEE;
  padding: 0.5rem;
}

.add-comment-container {
  background-color: #fafafa;
  border-radius: 0.25rem;
  margin: 0.5rem 0;
  padding: 0.5rem;
  box-shadow: 0px 2px 2px 1px rgba(32, 32, 32, 0.6);
  form {
    display: flex;
    gap: 0.25rem;
  }
  textarea {
    outline: 0px;
    flex-grow: 1;
    background-color: #fafafa;
    height: fit-content;
    resize: none;
    border-radius: 0.125rem;
    padding: 0.125rem;
  }
    
}

.comments-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  // padding: 0.5rem;

  border-radius: 0 0 0.25rem 0.25rem;
}
</style>