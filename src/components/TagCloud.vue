<template>
  <div class="p-2.5">
    <h3
      class="border-b border-b-gray-200 px-2 py-4 text-2xl font-bold text-gray-500"
    >
      Tags
    </h3>
    <span v-for="tag in tags" :key="tag" class="inline-block p-2.5">
      <router-link
        :to="{ name: 'Tag', params: { tag: tag } }"
        class="text-lg text-gray-400"
        active-class="text-orange-400 font-bold"
      >
        #{{ tag }}</router-link
      >
    </span>
  </div>
</template>

<script setup>
import useTags from "../composables/useTags";

const props = defineProps({
  posts: Array,
});

const { tags } = useTags(props.posts);
</script>
