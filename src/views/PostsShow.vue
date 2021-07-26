<template>
  <div class="posts-show">
    <div class="container">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
      <router-link v-bind:to="`/posts/${post.id}/edit`"><button>Edit Post</button></router-link>
      <router-link to="/posts">Back to all posts</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      post: {},
    };
  },
  created: function () {
    axios.get("/posts" + this.$route.params.id).then((response) => {
      this.post = response.data
    });
  },
};
</script>
