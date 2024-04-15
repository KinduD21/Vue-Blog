<template>
  <div v-if="posts.length" class="grid grid-cols-3 gap-5">
    <PostList :posts="postsWithTag" class="col-span-2" />
    <TagCloud :posts="posts" class="col-span-1" />
  </div>
  <Spinner v-else class="mt-10" />
</template>

<script setup>
import Spinner from "../components/Spinner.vue";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import getPosts from "../composables/getPosts.js";
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const posts = ref([]);
const route = useRoute();

onMounted(async () => {
  const fetchedPosts = await getPosts();
  posts.value = fetchedPosts;
});

const postsWithTag = computed(() => {
  return posts.value.filter((p) => p.tags.includes(route.params.tag));
});
</script>
