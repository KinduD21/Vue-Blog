import { ref } from "vue";
import { projectFirestore } from "../firebase/config";

export default async function getPosts() {
  const posts = ref([]);

  const res = await projectFirestore
    .collection("posts")
    .orderBy("createdAt")
    .get();
  posts.value = res.docs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return posts.value;
}
