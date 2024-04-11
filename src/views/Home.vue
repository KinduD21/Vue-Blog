<template>
  <div class="mt-10 flex flex-col gap-4">
    <div v-if="posts.length">
      <PostList v-if="showPosts" v-bind:posts="posts" />
    </div>
    <Spinner v-else />
    <button v-on:click="showPosts = !showPosts">Toggle posts</button>
  </div>
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
}

onMounted(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  getPosts();
});

const showPosts = ref(true);
</script>
