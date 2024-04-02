<template>
  <div class="flex flex-col gap-4">
    <h1>Home</h1>
    <div v-if="posts.length">
      <PostList v-if="showPosts" v-bind:posts="posts" />
    </div>
    <p v-else>Loading...</p>
    <button v-on:click="showPosts = !showPosts">Toggle posts</button>
  </div>
</template>

<script setup>
import PostList from "../components/PostList.vue";
import { ref, onMounted } from "vue";
import { supabase } from "../lib/supabaseClient";

const posts = ref([]);

async function getPosts() {
  const { data } = await supabase.from("posts").select();
  posts.value = data;
}

onMounted(() => {
  getPosts();
});

const showPosts = ref(true);
</script>
