<template>
  <div
    v-if="post"
    class="ml-8 mr-10 mt-10 flex flex-col items-start gap-5"
  >
    <h3
      class="relative mb-2.5 mt-8 inline-block text-3xl font-bold text-white before:absolute before:-inset-1 before:-z-10 before:block before:-skew-y-2 before:bg-orange-400"
    >
      {{ post.title }}
    </h3>
    <p
      class="my-3 ml-5 border-b border-dashed border-gray-300 pb-8 text-lg text-gray-700"
    >
      {{ post.body }}
    </p>
    <button
      @click="deletePost"
      class="mx-auto my-2.5 mt-5 rounded-md bg-orange-400 px-4 py-2 font-bold text-white hover:bg-orange-500"
    >
      Delete post
    </button>
  </div>
  <Spinner v-else class="mt-10" />
</template>

<script setup>
import Spinner from "../components/Spinner.vue";
import { onMounted, ref } from "vue";
import { projectFirestore } from "../firebase/config";
import router from "../router";

const props = defineProps({
  id: String,
});

const post = ref(null);

onMounted(async () => {
  let res = await projectFirestore.collection("posts").doc(props.id).get();
  post.value = { ...res.data(), id: res.id };
});

const deletePost = async () => {
  await projectFirestore
    .collection("posts")
    .doc(props.id)
    .delete()
    .then(() => router.push("/"));
};
</script>
