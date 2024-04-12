<template>
  <div
    v-if="post"
    class="mx-auto mt-10 flex w-full max-w-2xl flex-col items-center gap-5"
  >
    <h3 class="text-3xl font-bold text-gray-700">{{ post.title }}</h3>
    <p class="text-lg text-gray-700">{{ post.body }}</p>
  </div>
  <Spinner v-else class="mt-10" />
</template>

<script setup>
import Spinner from "../components/Spinner.vue";
import { onMounted, ref } from "vue";
import { supabase } from "../lib/supabaseClient";

const props = defineProps({
  id: String,
});

let post = ref(null);

onMounted(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  const { data } = await supabase
    .from("posts")
    .select()
    .eq("id", props.id)
    .single();
  post.value = data;
});
</script>
