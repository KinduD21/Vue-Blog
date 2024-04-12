<template>
  <li class="w-full">
    <router-link
      v-bind:to="{ name: 'Details', params: { id: post.id } }"
      class="no-underline"
    >
      <h3
        class="relative mb-2.5 mt-8 inline-block text-xl text-white before:absolute before:-inset-1 before:-z-10 before:block before:-skew-y-2 before:bg-orange-400"
      >
        {{ post.title }}
      </h3>
    </router-link>
    <p class="my-3 text-lg text-gray-700">{{ snippet }}</p>
    <div class="flex gap-2">
      <p v-for="tag in post.tags" :key="tag" class="text-base italic">
        {{ "#" + tag }}
      </p>
    </div>
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
