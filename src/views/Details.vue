<template>
  <div v-if="post">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { supabase } from "../lib/supabaseClient";

const props = defineProps({
  id: String,
});

let post = ref(null);

onMounted(async () => {
  const { data } = await supabase
    .from("posts")
    .select()
    .eq("id", props.id)
    .single();
  post.value = data;
  console.log(post);
});
</script>
