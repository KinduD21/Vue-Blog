<template>
  <li>
    <router-link v-bind:to="{ name: 'Details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags.split(' ')" :key="tag">{{ " #" + tag }}</span>
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
