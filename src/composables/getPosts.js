import { supabase } from "../lib/supabaseClient";
import { ref } from "vue";

export default async function getPosts() {
  const posts = ref([]);

  const { data } = await supabase.from("posts").select();
  posts.value = data;
  posts.value.forEach((post) => {
    post.tags = JSON.parse(post.tags);
  });
  return posts.value;
}
