<template>
  <div
    v-if="posts.length"
    class="grid grid-cols-3 gap-5 max-lg:mx-5 max-lg:flex max-lg:flex-col-reverse"
  >
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
import { projectFirestore } from "../firebase/config";

const posts = ref([]);

onMounted(async () => {
  const fetchedPosts = await getPosts();
  posts.value = fetchedPosts;

  projectFirestore
    .collection("posts")
    .orderBy("createdAt")
    .onSnapshot((snap) => {
      let docs = snap.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      posts.value = docs;
    });
});
</script>
