<template>
  <div>
    <form class="mx-auto max-w-lg text-left">
      <label
        class="relative mb-2.5 mt-8 inline-block text-xl text-white before:absolute before:-inset-1 before:-z-10 before:block before:-skew-y-2 before:bg-orange-400"
        >Title:</label
      >
      <input
        class="my-2.5 box-border block w-full rounded-md border border-gray-300 p-2.5 focus-visible:outline-orange-400"
        v-model="title"
        type="text"
        required
      />
      <label
        class="relative mb-2.5 mt-8 inline-block text-xl text-white before:absolute before:-inset-1 before:-z-10 before:block before:-skew-y-2 before:bg-orange-400"
        >Content:</label
      >
      <textarea
        class="my-2.5 box-border block h-40 w-full rounded-md border border-gray-300 p-2.5 focus-visible:outline-orange-400"
        v-model="body"
        required
      ></textarea>
      <label
        class="relative mb-2.5 mt-8 inline-block text-xl text-white before:absolute before:-inset-1 before:-z-10 before:block before:-skew-y-2 before:bg-orange-400"
        >Tags (press "Enter" to add a tag)</label
      >
      <input
        class="my-2.5 box-border block w-full rounded-md border border-gray-300 p-2.5 focus-visible:outline-orange-400"
        v-model="tag"
        type="text"
        @keydown.enter.prevent="handleKeydown"
      />
      <div class="flex gap-2">
        <span
          v-for="tag in tags"
          :key="tag"
          class="rounded-xl border-2 border-orange-400 px-4 py-2"
          >#{{ tag }}</span
        >
      </div>
      <button
        class="mt-5 rounded-md bg-orange-400 px-4 py-2 font-bold text-white hover:bg-orange-500"
      >
        Add Post
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("");
const body = ref("");
const tag = ref("");

const tags = ref([]);

const handleKeydown = () => {
  if (!tags.value.includes(tag.value)) {
    tag.value = tag.value.replace(/\s/, ""); // remove all whitespace
    tags.value.push(tag.value);
  }
  tag.value = "";
};
</script>
