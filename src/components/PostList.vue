<template>
  <ul>
    <SinglePost v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
  </ul>
</template>

<script setup>
import SinglePost from "./SinglePost.vue";

const props = defineProps({
  posts: Array,
});
</script>
