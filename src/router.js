import { createRouter, createWebHistory } from "vue-router";
import blog from "@/views/blog.vue";
const routes = [{ path: "/blog", component: blog }];
const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
