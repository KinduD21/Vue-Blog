<template>
  <div
    v-if="post"
    class="ml-8 mr-10 mt-10 flex w-full flex-col items-start gap-5"
  >
    <h3
      class="relative mb-2.5 mt-8 inline-block text-3xl font-bold text-white before:absolute before:-inset-1 before:-z-10 before:block before:-skew-y-2 before:bg-orange-400"
    >
      {{ post.title }}
    </h3>
    <p
      class="my-3 ml-5 border-b border-dashed border-gray-400 pb-8 text-lg text-gray-700"
    >
      {{ post.body }}
    </p>
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
