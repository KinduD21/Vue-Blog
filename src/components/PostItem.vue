<template>
  <li class="w-full">
    <router-link v-bind:to="{ name: 'Details', params: { id: post.id } }">
      <h3 class="text-3xl font-bold text-gray-700">{{ post.title }}</h3>
    </router-link>
    <p class="mb-2 mt-5 text-lg text-gray-700">{{ snippet }}</p>
    <span v-for="tag in post.tags.split(' ')" :key="tag" class="text-base">{{
      " #" + tag
    }}</span>
  </li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  post: Object,
});

const snippet = computed(() => {
  if (props.post && props.post.body) {
    return props.post.body.substring(0, 100) + "....";
  }
});
</script>
