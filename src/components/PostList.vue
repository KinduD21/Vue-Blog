<template>
  <ul class="mx-auto flex w-full max-w-2xl flex-col items-center gap-5">
    <PostItem v-for="post in posts" v-bind:key="post.id" v-bind:post="post" />
  </ul>
</template>

<script setup>
import PostItem from "./PostItem.vue";

const props = defineProps({
  posts: Array,
});
</script>
