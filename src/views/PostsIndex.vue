<template>
  <div class="postsindex">
    <div v-for="post in posts" :key="post.id">
      <router-link v-bind:to="`/posts/${posts.id}`">
      <h2>Title: {{ post.title }}</h2>
      <p>Body: {{ post.body }}</p>
      <img v-bind:src="post.image" alt="post.title" />
      <!-- <button>More info!</button> -->
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Here are posts!",
      posts: [],
    };
  },
  created: function () {
    this.postsIndex();
  },
  methods: {
    postsIndex: function () {
      axios.get("http://localhost:3000/posts").then((response) => {
        this.posts = response.data;
        console.log("All posts:", this.posts);
      });
    },
  },
};
</script>
