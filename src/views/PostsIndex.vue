<template>
  <div class="posts-index">
    <div class="card-deck">
      <div class="card">
        Search by title:
        <input v-model="titleFilter" />
        <div
          v-for="post in filterBy(posts, titleFilter, 'title', 'body')"
          :key="post.id"
          v-bind:class="{ selected: post === currentPost }"
          v-on:click="currentPost = post"
        ></div>
      </div>
    </div>

    <!-- <div v-for="post in posts" :key="post.id">
      <h2>Title: {{ post.title }}</h2>
      <p>Body: {{ post.body }}</p>
      <img v-bind:src="post.image" alt="post.title" />
      <p><router-link v-bind:to="`/posts/${posts.id}`">Link to post</router-link></p>
      </div> -->
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Here are posts!",
      posts: [],
      newPostParams: {},
      currentPost: {},
      titleFilter: "",
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
