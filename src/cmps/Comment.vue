<template>
  <div class="comment-container">
    <div class="comment-header">
      <div class="avatar-container">
          <img src="comment.userImg" alt="user image" />
      </div>
      <div class="username-container">
          <span>{{comment.username}}</span>
      </div>
    </div>
    <div class="comment-main">
        <p>{{comment.txt}}</p>
    </div>
    <div class="comment-footer">
        <small>Commented on {{parsedTime}}</small>
    </div>
  </div>
</template>

<script>
import {utilService} from '../services/utilService'

export default {
    props: ['comment'],
    computed: {
        parsedTime() {
            return utilService.parseTimestamp(this.comment.timestamp)
        }
    }
};
</script>

<style>
</style>