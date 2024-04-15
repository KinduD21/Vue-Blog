<template>
  <div v-if="posts.length" class="grid grid-cols-3 gap-5">
    <PostList :posts="posts" class="col-span-2" />
    <TagCloud :posts="posts" class="col-span-1" />
  </div>
  <Spinner v-else class="mt-10" />
</template>

<script setup>
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
import { ref, onMounted } from "vue";
import getPosts from "../composables/getPosts.js";

const posts = ref([]);

onMounted(async () => {
  const fetchedPosts = await getPosts();
  posts.value = fetchedPosts;
});
</script>
