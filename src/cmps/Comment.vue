<template>
  <div class="comment-container">
    <div class="comment-header">
      <div class="avatar-container">
        <img :src="comment.userImg" alt="user image" />
      </div>
      <div class="username-container">
        <span>{{ comment.username }}</span>
      </div>
    </div>
    <div class="hr" />
    <div class="comment-main">
      <p>{{ comment.txt }}</p>
    </div>
    <div class="comment-footer">
      <small>Commented on {{ parsedTime }}</small>
    </div>
  </div>
</template>

<script>
import { utilService } from "../services/utilService";

export default {
  props: ["comment"],
  computed: {
    parsedTime() {
      return utilService.parseTimestamp(this.comment.timestamp);
    },
  },
};
</script>

<style lang="scss" scoped>
.comment-container {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border-radius: 0.25rem;
    background-color: #FAFAFA;
    box-shadow: 0px 2px 2px 1px rgba(32, 32, 32, 0.6);
}


.comment-header {
    display: flex;
    align-items: center;
}

.hr {
    width: 100%;
    height: 1px;
    background-color: rgba(32,32,32,0.8);
}

p {
    margin: 0 0.125rem;
}
.avatar-container {
    width: 2rem;
    border-radius: 100%;
    overflow: hidden;
}

img {
    width: 100%
}
</style>