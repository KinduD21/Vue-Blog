<template>
  <div v-if="posts.length" class="mx-auto max-w-2xl">
    <PostList v-if="showPosts" v-bind:posts="posts" />
  </div>
  <Spinner v-else class="mt-10" />
</template>

<script setup>
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";

const posts = ref([]);

async function getPosts() {
  const { data } = await supabase.from("posts").select();
  posts.value = data;
  posts.value.forEach((post) => {
    post.tags = JSON.parse(post.tags);
  });
}

onMounted(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  getPosts();
});

const showPosts = ref(true);
</script>
